import type Chargebee from 'chargebee';

import {
  isListOffsetOption,
  type ListResultMethodName,
  type MethodReturnType,
  type ResolveResultReturn,
  type ResourceResult,
  type ResultMethodName,
} from './chargebee-resource.types';

export class ChargebeeResource {
  constructor(protected readonly chargebee: Chargebee) {}

  protected request<
    TResourceName extends keyof Chargebee,
    TMethodName extends keyof Chargebee[TResourceName],
    TReturning extends ResourceResult,
  >(
    resourceName: TResourceName,
    methodName: TMethodName extends ResultMethodName<TResourceName, TMethodName> ? TMethodName : never,
    returning: TReturning
  ) {
    type MethodReturn = MethodReturnType<TResourceName, TMethodName>;

    const functionDef = this.chargebee[resourceName][methodName] as any;

    return async (...args: any[]): Promise<ResolveResultReturn<TReturning, MethodReturn>> => {
      const result = await (functionDef as (...a: any[]) => Promise<Record<string, unknown>>)(...args);
      return this.resolveResult(returning)(result) as ResolveResultReturn<TReturning, MethodReturn>;
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
    type MethodReturn = MethodReturnType<TResourceName, TMethodName>;
    type ListItemReturn = MethodReturn extends { list: (infer I)[] } ? I : Record<string, unknown>;

    const functionDef = this.chargebee[resourceName][methodName] as any;

    const method = async (...args: any[]) => {
      const listResult = await (
        functionDef as (...a: any[]) => Promise<{ list: Array<unknown>; next_offset?: string }>
      )(...args);
      const items = (listResult.list as Array<Record<string, unknown>>).map(
        this.resolveResult(returning)
      ) as ResolveResultReturn<TReturning, ListItemReturn>[];
      return {
        items,
        nextOffset: listResult.next_offset as string | undefined,
      };
    };

    const iterate = async function* (...args: Parameters<typeof method>) {
      let offset = args.find(isListOffsetOption)?.offset;

      do {
        // eslint-disable-next-line no-loop-func
        const forwardArgs = args.map((arg) =>
          arg !== null && typeof arg === 'object' && offset !== undefined ? { ...arg, offset } : arg
        ) as Parameters<typeof method>;

        // eslint-disable-next-line no-await-in-loop
        const listResult = await method(...forwardArgs);
        yield* listResult.items;
        offset = listResult.nextOffset;
      } while (offset);
    };

    const all = async (...args: Parameters<typeof method>) => {
      const items: ResolveResultReturn<TReturning, ListItemReturn>[] = [];

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
