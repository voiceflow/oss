import type { AnySlateTextElement, SlateText } from '@voiceflow/dtos-interact';
import { SlateTextElementProperty, SlateTextProperty } from '@voiceflow/dtos-interact';

import { convertCSSPropertiesToStyles } from './styles';
import type { CSSProperties } from './types';

export const getElementCSSProperties = (element: AnySlateTextElement): CSSProperties => {
  const textAlign = element[SlateTextElementProperty.TEXT_ALIGN] as CSSProperties['textAlign'];

  const styles: CSSProperties = {};

  if (textAlign) styles.textAlign = textAlign;

  return styles;
};

export const getTextCSSProperties = (text: SlateText): CSSProperties => {
  const color = text[SlateTextProperty.COLOR];
  const isItalic = text[SlateTextProperty.ITALIC];
  const fontWeight = text[SlateTextProperty.FONT_WEIGHT];
  const fontFamily = text[SlateTextProperty.FONT_FAMILY];
  const isUnderline = text[SlateTextProperty.UNDERLINE];
  const isStrikeThrough = text[SlateTextProperty.STRIKE_THROUGH];

  const styles: CSSProperties = {};

  if (color) styles.color = `rgba(${color.r},${color.g},${color.b},${color.a})`;
  if (isItalic) styles.fontStyle = 'italic';
  if (fontWeight) styles.fontWeight = Number(fontWeight);
  if (fontFamily) styles.fontFamily = `"${fontFamily}"`;

  if (isUnderline || isStrikeThrough) {
    let decoration = '';

    if (isUnderline) decoration += 'underline';
    if (isStrikeThrough) decoration += ' line-through';

    styles.textDecoration = decoration.trim();
  }

  return styles;
};

export const getElementStyles = (element: AnySlateTextElement): string =>
  convertCSSPropertiesToStyles(getElementCSSProperties(element));

export const getTextStyles = (text: SlateText): string => convertCSSPropertiesToStyles(getTextCSSProperties(text));
