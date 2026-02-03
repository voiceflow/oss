import { describe, expect, it, vi } from 'vitest';

import { createMockFactory, mockFree } from './mock';

describe('mock utilities', () => {
  describe('createMockFactory()', () => {
    const createMock = createMockFactory(vi);

    it('mock top-level methods', () => {
      const nested = { foo: () => 1, bar: () => 2 };
      const mock = createMock<typeof nested>();
      vi.mocked(mock.foo).mockReturnValue(3);
      vi.mocked(mock.bar).mockReturnValue(3);

      const select = (data: typeof nested) => data.foo() + data.bar();

      expect(select(nested)).toBe(3);
      expect(select(mock)).toBe(6);
      expect(mock.foo).toBeCalled();
      expect(mock.bar).toBeCalled();
    });

    it('mock methods in returned values', () => {
      const nested = { foo: () => ({ bar: () => true }) };
      const mock = createMock<typeof nested>();
      vi.mocked(mock.foo().bar).mockReturnValue(false);

      const select = (data: typeof nested) => data.foo().bar();

      expect(select(nested)).toBe(true);
      expect(select(mock)).toBe(false);
      expect(mock.foo).toBeCalled();
      expect(mock.foo().bar).toBeCalled();
    });

    it('mock deeply nested method', () => {
      const nested = { foo: { bar: { fizz: () => true } } };
      const mock = createMock<typeof nested>();
      vi.mocked(mock.foo.bar.fizz).mockReturnValue(false);

      const select = (data: typeof nested) => data.foo.bar.fizz();

      expect(select(nested)).toBe(true);
      expect(select(mock)).toBe(false);
      expect(mock.foo.bar.fizz).toBeCalled();
    });

    it('mock deeply nested methods in returned values', () => {
      const nested = { foo: { bar: () => ({ fizz: () => ({ buzz: () => true }) }) } };
      const mock = createMock<typeof nested>();
      vi.mocked(mock.foo.bar().fizz().buzz).mockReturnValue(false);

      const select = (data: typeof nested) => data.foo.bar().fizz().buzz();

      expect(select(nested)).toBe(true);
      expect(select(mock)).toBe(false);
      expect(mock.foo.bar).toBeCalled();
      expect(mock.foo.bar().fizz).toBeCalled();
      expect(mock.foo.bar().fizz().buzz).toBeCalled();
    });

    it('accept partial return values', () => {
      const nested = { foo: { bar: { fizz: () => ({ first: 1, second: 2 }) } } };
      const mock = createMock<typeof nested>({ foo: { bar: { fizz: () => ({ first: 2 }) } } });

      const select = (data: typeof nested) => data.foo.bar.fizz().first;

      expect(select(nested)).toBe(1);
      expect(select(mock)).toBe(2);
      expect(mock.foo.bar.fizz).toBeCalled();
    });

    it('accept partial seed', () => {
      const nested = { foo: { bar: { fizz: () => 1, buzz: () => 2 } } };
      const mock = createMock<typeof nested>({ foo: { bar: { fizz: () => 2 } } });
      vi.mocked(mock.foo.bar.buzz).mockReturnValue(3);

      const select = (data: typeof nested) => data.foo.bar.fizz() + data.foo.bar.buzz();

      expect(select(nested)).toBe(3);
      expect(select(mock)).toBe(5);
      expect(mock.foo.bar.fizz).toBeCalled();
      expect(mock.foo.bar.buzz).toBeCalled();
      expect(mock.foo.bar.fizz()).toBe(2);
      expect(mock.foo.bar.buzz()).toBe(3);
    });

    it('can be composed', () => {
      const nested = { foo: { bar: () => 1, fizz: () => 2 } };
      const innerMock = createMock<(typeof nested)['foo']>({ fizz: vi.fn().mockReturnValue(3) });
      const mock = createMock<typeof nested>({ foo: innerMock });
      vi.mocked(innerMock.bar).mockReturnValue(4);

      const select = (data: typeof nested) => data.foo.bar();

      expect(select(nested)).toBe(1);
      expect(mock.foo.bar === innerMock.bar).toBe(true);
      expect(select(mock)).toBe(4);
      expect(innerMock.bar).toBeCalled();
      expect(mock.foo.bar).toBeCalled();
    });

    it('can be composed with functions', () => {
      const nested = { foo: { bar: () => ({ fizz: { buzz: () => true } }) } };
      const innerMock = createMock<ReturnType<(typeof nested)['foo']['bar']>>({
        fizz: { buzz: vi.fn().mockReturnValue(false) },
      });
      const mock = createMock<typeof nested>({ foo: { bar: () => innerMock } });

      const select = (data: typeof nested) => data.foo.bar().fizz.buzz();

      expect(select(nested)).toBe(true);
      expect(mock.foo.bar().fizz.buzz === innerMock.fizz.buzz).toBe(true);
      expect(select(mock)).toBe(false);
      expect(innerMock.fizz.buzz).toBeCalled();
      expect(mock.foo.bar().fizz.buzz).toBeCalled();
    });

    it('persist mutations', () => {
      const nested = { foo: { one: 1, two: 2 }, three: 3, four: 4 };
      const mock = createMock<typeof nested>({ foo: { one: 5 }, three: 7 });
      mock.foo.two = 6;
      mock.four = 8;

      const select = (data: typeof nested) => [data.foo.one, data.foo.two, data.three, data.four];

      expect(select(nested)).toEqual([1, 2, 3, 4]);
      expect(select(mock)).toEqual([5, 6, 7, 8]);
    });

    it('can be composed and persist mutations', () => {
      const nested = { foo: () => ({ bar: () => ({ fizz: () => ({ buzz: { one: 1, two: 2 } }) }) }) };
      const fizzMock = createMock<ReturnType<ReturnType<ReturnType<(typeof nested)['foo']>['bar']>['fizz']>>({
        buzz: {},
      });
      const barMock = createMock<ReturnType<ReturnType<(typeof nested)['foo']>['bar']>>({
        fizz: vi.fn().mockReturnValue(fizzMock),
      });
      const mock = createMock<typeof nested>({ foo: () => ({ bar: () => barMock }) });
      fizzMock.buzz.two = 3;

      const select = (data: typeof nested) => data.foo().bar().fizz().buzz.two;

      expect(select(nested)).toBe(2);
      expect(select(mock)).toBe(3);
    });

    it('do not mock arrays', () => {
      const array = [1, 2, 3];
      const nested = { foo: array };
      const mock = createMock<typeof nested>({ foo: array });

      const select = (data: typeof nested) => data.foo;

      expect(select(nested)).toBe(array);
      expect(select(mock)).toBe(array);
    });

    it('do not mock maps', () => {
      const map = new Map([
        ['one', 1],
        ['two', 2],
      ]);
      const nested = { foo: map };
      const mock = createMock<typeof nested>({ foo: map });

      const select = (data: typeof nested) => data.foo;

      expect(select(nested)).toBe(map);
      expect(select(mock)).toBe(map);
    });

    it('do not mock sets', () => {
      const set = new Set([1, 2, 3]);
      const nested = { foo: set };
      const mock = createMock<typeof nested>({ foo: set });

      const select = (data: typeof nested) => data.foo;

      expect(select(nested)).toBe(set);
      expect(select(mock)).toBe(set);
    });

    it('do not mock values tagged with mockFree', () => {
      const data = { fizz: 'buzz' };
      const nested = { foo: data };
      const mock = createMock<typeof nested>({ foo: mockFree(data) });

      const select = (data: typeof nested) => data.foo;

      expect(select(nested)).toBe(data);
      expect(select(mock)).toBe(data);
    });
  });
});
