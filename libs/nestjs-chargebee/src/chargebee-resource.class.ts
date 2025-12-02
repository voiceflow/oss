import { ChargeBee } from 'chargebee-typescript';
import type { ListResult } from 'chargebee-typescript/lib/list_result';
import type { RequestWrapper } from 'chargebee-typescript/lib/request_wrapper';
import type { Result } from 'chargebee-typescript/lib/result';

import type { ChargebeeModuleOptions } from './chargebee.interface';
import { configureChargebee } from './chargebee.utils';
import {
  isListOffsetOption,
  type ListResultMethodName,
  type ProcessWaitMethodName,
  type ResolveResultReturn,
  type ResourceResult,
  type ResultMethodName,
} from './chargebee-resource.types';

export class ChargebeeResource {
  protected readonly chargebee = new ChargeBee();

  constructor(protected readonly options: ChargebeeModuleOptions) {}

  protected request<
    TResourceName extends keyof ChargeBee,
    TMethodName extends keyof ChargeBee[TResourceName],
    TReturning extends ResourceResult,
  >(
    resourceName: TResourceName,
    methodName: TMethodName extends
      | ResultMethodName<TResourceName, TMethodName>
      | ProcessWaitMethodName<TResourceName, TMethodName>
      ? TMethodName
      : never,
    returning: TReturning
  ) {
    type MethodDefinition = ChargeBee[TResourceName][TMethodName] extends (...args: unknown[]) => RequestWrapper<Result>
      ? ChargeBee[TResourceName][TMethodName]
      : never;

    const functionDef = this.chargebee[resourceName][methodName] as MethodDefinition;

    return async (...args: Parameters<MethodDefinition>) => {
      configureChargebee(this.chargebee, this.options);
      return functionDef(...args)
        .request()
        .then(this.resolveResult(returning));
    };
  }

  protected listRequest<
    TResourceName extends keyof ChargeBee,
    TMethodName extends keyof ChargeBee[TResourceName],
    TReturning extends ResourceResult,
  >(
    resourceName: TResourceName,
    methodName: TMethodName extends ListResultMethodName<TResourceName, TMethodName> ? TMethodName : never,
    returning: TReturning
  ) {
    type MethodDefinition = ChargeBee[TResourceName][TMethodName] extends (...args: any[]) => RequestWrapper<ListResult>
      ? ChargeBee[TResourceName][TMethodName]
      : never;

    const functionDef = this.chargebee[resourceName][methodName] as MethodDefinition;

    const method = async (...args: Parameters<MethodDefinition>) => {
      configureChargebee(this.chargebee, this.options);
      return functionDef(...args)
        .request()
        .then((listResult: ListResult) => {
          const items = listResult.list.map(this.resolveResult(returning));
          return {
            items,
            nextOffset: listResult.next_offset as string | undefined,
          };
        });
    };

    const iterate = async function* (...args: Parameters<typeof method>) {
      let offset = args.find(isListOffsetOption)?.offset;

      do {
        // eslint-disable-next-line no-loop-func
        const forwardArgs = args.map((arg) => Object.assign(arg, { offset })) as Parameters<typeof functionDef>;

        // eslint-disable-next-line no-await-in-loop
        const listResult = await method(...forwardArgs);
        yield* listResult.items;
        offset = listResult.nextOffset;
      } while (offset);
    };

    const all = async (...args: Parameters<typeof method>) => {
      const items: ResolveResultReturn<TReturning>[] = [];

      for await (const result of iterate(...args)) {
        items.push(result);
      }

      return items;
    };

    return Object.assign(method, { all, iterate });
  }

  private resolveResult =
    <TReturning extends ResourceResult>(returning: TReturning) =>
    (result: Result) =>
      Object.fromEntries(
        Object.keys(returning).map((key) => [key, result[key as keyof Result]])
      ) as ResolveResultReturn<TReturning>;
}
