import type { createMockFactory } from '@voiceflow/universal-mock';
import type { MockInstance as ViMockInstance } from 'vitest';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { vi } from 'vitest';

export type { DeepMocked, DeepPartial, PartialFuncReturn } from '@voiceflow/universal-mock';
export { mockFree } from '@voiceflow/universal-mock';

export const createMock: ReturnType<typeof createMockFactory<typeof vi>>;

declare module '@voiceflow/universal-mock' {
  export interface MockInstance<T, Y extends any[]> extends ViMockInstance<(...args: Y) => T> {}
}
