import type Chargebee from 'chargebee';

interface ChargebeeListResponse {
  list: Array<unknown>;
  next_offset?: string;
}

export type ResultMethodName<
  TResource extends keyof Chargebee,
  TMethod extends keyof Chargebee[TResource],
> = Chargebee[TResource][TMethod] extends (...args: any[]) => Promise<infer R>
  ? R extends ChargebeeListResponse
    ? 'Method must return a single result, not a list'
    : TMethod
  : never;

export type ListResultMethodName<
  TResource extends keyof Chargebee,
  TMethod extends keyof Chargebee[TResource],
> = Chargebee[TResource][TMethod] extends (...args: any[]) => Promise<infer R>
  ? R extends ChargebeeListResponse
    ? TMethod
    : 'Method must return a list response'
  : never;

export type ResourceResult = Record<string, { optional: boolean }>;

export type ResolveResultReturn<TReturning extends ResourceResult> = {
  [K in keyof TReturning]: TReturning[K] extends { optional: true } ? unknown | undefined : unknown;
};

export const isListOffsetOption = (arg: unknown): arg is { offset: string } =>
  !!arg && typeof arg === 'object' && 'offset' in arg && typeof arg.offset === 'string';
