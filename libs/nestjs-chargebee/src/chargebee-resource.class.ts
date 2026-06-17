import type Chargebee from 'chargebee';

import type { ChargebeeModuleOptions } from './chargebee.interface';
import { createChargebee } from './chargebee.utils';
import {
  isListOffsetOption,
  type ListResultMethodName,
  type ResolveResultReturn,
  type ResourceResult,
  type ResultMethodName,
} from './chargebee-resource.types';

export class ChargebeeResource {
  protected readonly chargebee: Chargebee;

  constructor(protected readonly options: ChargebeeModuleOptions) {
    this.chargebee = createChargebee(options);
  }

  protected request<
    TResourceName extends keyof Chargebee,
    TMethodName extends keyof Chargebee[TResourceName],
    TReturning extends ResourceResult,
  >(
    resourceName: TResourceName,
    methodName: TMethodName extends ResultMethodName<TResourceName, TMethodName> ? TMethodName : never,
    returning: TReturning
  ) {
    type MethodDefinition = Chargebee[TResourceName][TMethodName] extends (
      ...args: any[]
    ) => Promise<Record<string, unknown>>
      ? Chargebee[TResourceName][TMethodName]
      : never;

    const functionDef = this.chargebee[resourceName][methodName] as any;

    return async (...args: Parameters<MethodDefinition>) => {
      const result = await (functionDef as (...a: any[]) => Promise<Record<string, unknown>>)(...args);
      return this.resolveResult(returning)(result);
    };
  }

  protected listRequest<
    TResourceName extends keyof Chargebee,
    TMethodName extends keyof Chargebee[TResourceName],
    TReturning extends ResourceResult,
  >(
    resourceName: TResourceName,
    methodName: TMethodName extends ListResultMethodName<TResourceName, TMethodName> ? TMethodName : never,
    returning: TReturning
  ) {
    type MethodDefinition = Chargebee[TResourceName][TMethodName] extends (
      ...args: any[]
    ) => Promise<{ list: Array<Record<string, unknown>> }>
      ? Chargebee[TResourceName][TMethodName]
      : never;

    const functionDef = this.chargebee[resourceName][methodName] as any;

    const method = async (...args: Parameters<MethodDefinition>) => {
      const listResult = await (
        functionDef as (...a: any[]) => Promise<{ list: Array<unknown>; next_offset?: string }>
      )(...args);
      const items = listResult.list.map((item) => this.resolveResult(returning)(item as Record<string, unknown>));
      return {
        items,
        nextOffset: listResult.next_offset as string | undefined,
      };
    };

    const iterate = async function* (...args: Parameters<typeof method>) {
      let offset = args.find(isListOffsetOption)?.offset;

      do {
        // eslint-disable-next-line no-loop-func
        const forwardArgs = args.map((arg) => Object.assign(arg, { offset })) as Parameters<typeof method>;

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
    (result: Record<string, unknown>) =>
      Object.fromEntries(Object.keys(returning).map((key) => [key, result[key]])) as ResolveResultReturn<TReturning>;
}
