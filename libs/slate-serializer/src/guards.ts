import type { AnySlateTextElement, SlateTextLinkElement, SlateTextVariableElement } from '@voiceflow/dtos-interact';
import { SlateTextElementType } from '@voiceflow/dtos-interact';

export const isLinkElement = (element: AnySlateTextElement): element is SlateTextLinkElement =>
  element.type === SlateTextElementType.LINK;

export const isVariableElement = (element: AnySlateTextElement): element is SlateTextVariableElement =>
  element.type === SlateTextElementType.VARIABLE;
