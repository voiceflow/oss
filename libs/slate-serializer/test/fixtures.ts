import type { SlateText, SlateTextElement } from '@voiceflow/dtos-interact';

export const createText = <T extends Omit<SlateText, 'text'>>(obj: T = {} as T): SlateText => ({
  ...obj,
  text: 'text',
});

export const createElement = <T extends Omit<SlateTextElement, 'children'>>(obj: T = {} as T): SlateTextElement => ({
  ...obj,
  children: [createText()],
});
