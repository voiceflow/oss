import { vi } from 'vitest';

import { createMockFactory } from '../build/cjs/mock.js';

export { mockFree } from '../build/cjs/mock.js';

export const createMock = createMockFactory(vi);
