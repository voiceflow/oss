import type { CSSProperties } from './types';

const CAPITAL_LETTER_REGEXP = /[A-Z]/g;

export const cssPropertyNameToStyleName = (name: string): string =>
  name.replace(CAPITAL_LETTER_REGEXP, (match) => `-${match.toLowerCase()}`);

export const convertCSSPropertiesToStyles = (properties: CSSProperties): string =>
  Object.entries(properties)
    .map(([key, value]) => `${cssPropertyNameToStyleName(key)}:${value}`)
    .join(';');
