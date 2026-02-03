/**
 * this implementation was copied from the package `@voiceflow/test-common/jest`
 * so that we can make it framework-agnostic (jest vs vitest)
 *
 * you can find the original implementation here:
 * https://github.com/golevelup/nestjs/blob/master/packages/testing/ts-jest/src/mocks.ts
 */

const IS_PROXY_MOCK = Symbol('is-proxy-mock');
const IS_MOCK_FREE = Symbol('is-mock-free');

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-object-type
export interface MockInstance<T, Y extends any[], C = any> {}

interface FrameworkStatic<M> {
  fn: <T, Y extends any[], C = any>(implementation?: (this: C, ...args: Y) => T) => M;
  isMockFunction?: (fn: any) => boolean;
}
type ArgsType<T> = T extends (...args: infer R) => any ? R : never;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<PartialFuncReturn<U>>
    : T[P] extends ReadonlyArray<infer U>
      ? ReadonlyArray<PartialFuncReturn<U>>
      : unknown extends T[P]
        ? T[P]
        : PartialFuncReturn<T[P]>;
};

export type PartialFuncReturn<T> = {
  [K in keyof T]?: T[K] extends (...args: infer A) => infer U
    ? (...args: A) => PartialFuncReturn<U> | PartialFuncReturn<Awaited<U>>
    : DeepPartial<T[K]>;
};

export type DeepMocked<T> = {
  [K in keyof T]: Required<T>[K] extends (...args: any[]) => infer U
    ? MockInstance<ReturnType<Required<T>[K]>, ArgsType<T[K]>> & ((...args: ArgsType<T[K]>) => DeepMocked<U>)
    : T[K] extends object
      ? DeepMocked<T[K]>
      : T[K];
} & T;

const isReserved = (prop: string | symbol) => {
  return (
    prop === 'inspect' ||
    prop === 'then' ||
    (typeof prop === 'symbol' && prop.toString() === 'Symbol(util.inspect.custom)')
  );
};

const isProxyMock = (obj: any) => obj[IS_PROXY_MOCK] === true;
const isMockFree = (obj: any) => obj instanceof Map || obj instanceof Set || obj[IS_MOCK_FREE] === true;

/**
 * tags objects that should not be extended with automatically mocked properties and methods
 */
export const mockFree = <T extends object & { [IS_MOCK_FREE]?: boolean }>(value: T): T => {
  if (value) {
    // eslint-disable-next-line no-param-reassign
    value[IS_MOCK_FREE] = true;
  }

  return value;
};

/**
 * creates a mocked function that returns a mock proxy when called
 */
const createRecursiveMockProxy = <T extends object>(
  framework: FrameworkStatic<any>,
  name: string
): MockInstance<T, any[]> => {
  const cache = new Map<string | number | symbol, any>();

  const proxy = new Proxy({} as T, {
    get: (_obj, prop) => {
      if (prop === IS_PROXY_MOCK) return true;
      if (isReserved(prop)) return undefined;
      if (cache.has(prop)) return cache.get(prop);

      const mockedProp = createUniversalMockProxy(framework, `${name}.${prop.toString()}`);

      cache.set(prop, mockedProp);

      return mockedProp;
    },
  });

  return framework.fn(() => proxy);
};

/**
 * creates a mock proxy that can be treated as either a function or an object
 */
export const createUniversalMockProxy = <M, T extends object>(
  framework: FrameworkStatic<M>,
  name: string
): DeepMocked<T> => {
  const cache = new Map<string | number | symbol, any>();

  const proxy = new Proxy(createRecursiveMockProxy(framework, name) as T, {
    set: (target, prop, newValue, receiver) => {
      const didSet = Reflect.set(target, prop, newValue, receiver);

      if (didSet) {
        cache.delete(prop);
      }

      return didSet;
    },
    get: (obj, prop) => {
      if (prop === IS_PROXY_MOCK) return true;
      if (isReserved(prop)) return undefined;
      if (cache.has(prop)) return cache.get(prop);

      let mockedProp: any;

      if (prop in obj) {
        mockedProp = obj[prop as keyof PartialFuncReturn<T>];
      } else {
        mockedProp = createUniversalMockProxy(framework, `${name}.${prop.toString()}`);
      }

      cache.set(prop, mockedProp);
      return mockedProp;
    },
  });

  return proxy as DeepMocked<T>;
};

export interface MockOptions {
  name?: string;
}

export const createMockFactory =
  <M>(framework: FrameworkStatic<M>) =>
  <T extends object>(partial: PartialFuncReturn<T> = {}, options: MockOptions = {}): DeepMocked<T> => {
    const cache = new Map<string | number | symbol, any>();
    const { name = 'mock' } = options;

    const proxy = new Proxy(partial, {
      set: (target, prop, newValue, receiver) => {
        const didSet = Reflect.set(target, prop, newValue, receiver);

        if (didSet) {
          cache.delete(prop);
        }

        return didSet;
      },
      get: (obj, prop) => {
        if (prop === IS_PROXY_MOCK) return true;
        if (isReserved(prop)) return undefined;
        if (cache.has(prop)) return cache.get(prop);

        let mockedProp: any;

        if (prop in obj) {
          const checkProp = obj[prop as keyof PartialFuncReturn<T>];

          if (isProxyMock(checkProp) || isMockFree(checkProp) || framework.isMockFunction?.(checkProp)) {
            mockedProp = checkProp;
          } else if (typeof checkProp === 'function') {
            // wrap functions using test framework
            mockedProp = framework.fn(checkProp);
          } else if (!!checkProp && typeof checkProp === 'object' && !Array.isArray(checkProp)) {
            // extend objects by automatically mocking other properties and methods
            mockedProp = createMockFactory(framework)(checkProp, { name: `${name}.${prop.toString()}` });
          } else {
            mockedProp = checkProp;
          }
        } else if (prop === 'constructor') {
          mockedProp = () => undefined;
        } else {
          // treats undefined properties as both mock functions and objects with automatically mocked properties
          mockedProp = createUniversalMockProxy(framework, `${name}.${prop.toString()}`);
        }

        cache.set(prop, mockedProp);
        return mockedProp;
      },
    });

    return proxy as DeepMocked<T>;
  };
