import { vi } from 'vitest';

import { createMockFactory } from '../build/main.mjs';

export { mockFree } from '../build/main.mjs';

export const createMock = createMockFactory(vi);
