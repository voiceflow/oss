import type {
  AnySlateTextElement,
  Descendant,
  SlateText,
  SlateTextLinkElement,
  SlateTextValue,
  SlateTextVariableElement,
} from '@voiceflow/dtos-interact';
import { SlateTextProperty } from '@voiceflow/dtos-interact';
import * as Slate from 'slate';

import { isLinkElement, isVariableElement } from '../guards';

export interface MarkdownSerializerOptions {
  variablesMap?: Partial<Record<string, { id: string; name: string }>>;
}

const serializeTextNode = (node: SlateText): string => {
  const isItalic = node[SlateTextProperty.ITALIC];
  const isUnderline = node[SlateTextProperty.UNDERLINE];
  const isStrikeThrough = node[SlateTextProperty.STRIKE_THROUGH];
  const fontWeight = node[SlateTextProperty.FONT_WEIGHT];

  let { text } = node;

  if (!text.trim()) return text;

  // Extract leading and trailing whitespaces
  const leadingWhitespace = text.match(/^\s+/) || '';
  // eslint-disable-next-line sonarjs/slow-regex
  const trailingWhitespace = text.match(/\s+$/) || '';

  // Trim the text to remove leading and trailing whitespaces
  text = text.trim();

  if (isItalic) text = `*${text}*`;
  if (isUnderline) text = `<u>${text}</u>`;
  if (isStrikeThrough) text = `~~${text}~~`;
  if (fontWeight) text = `**${text}**`;

  // Add the leading and trailing whitespaces back to the outside of the markers
  return `${leadingWhitespace}${text}${trailingWhitespace}`;
};

const serializeLinkElement = (node: SlateTextLinkElement, options: MarkdownSerializerOptions): string => {
  const children = node.children.map((node) => serializeNode(node, options));

  return `[${children}](${node.url?.replace(/\s+/g, '')})`;
};

export const serializeVariableElement = (node: SlateTextVariableElement, options: MarkdownSerializerOptions) => {
  const resultName = options.variablesMap ? (options.variablesMap[node.id]?.name ?? node.id) : node.name;
  return `{${resultName.concat(node.path ?? '')}}`;
};

const serializeElementNode = (node: AnySlateTextElement, options: MarkdownSerializerOptions): string => {
  if (isLinkElement(node)) return serializeLinkElement(node, options);
  if (isVariableElement(node)) return serializeVariableElement(node, options);

  return node.children.map((node) => serializeNode(node, options)).join('');
};

const serializeNode = (node: Descendant, options: MarkdownSerializerOptions): string =>
  // eslint-disable-next-line no-nested-ternary
  Slate.Text.isText(node)
    ? serializeTextNode(node)
    : Slate.Element.isElement(node)
      ? serializeElementNode(node, options)
      : '';

export const serializeToMarkdown = (content: SlateTextValue, options: MarkdownSerializerOptions = {}): string =>
  content
    .map((node) => serializeNode(node, options))
    .join('\n')
    .replace(/\n{3,}/g, (match) => `\n${'<br/>'.repeat(match.length - 2)}\n\n`);
