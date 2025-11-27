import type { Descendant, SlateTextValue } from '@voiceflow/dtos-interact';
import * as Slate from 'slate';

import { isLinkElement, isVariableElement } from '../guards';

export interface TextSerializerOptions {
  variablesMap?: Partial<Record<string, { id: string; name: string }>>;
  markdownLinks?: boolean;
  encodeVariables?: boolean;
}

const nodeToString = (node: Descendant, options: TextSerializerOptions): string => {
  if (!Slate.Element.isElement(node)) return Slate.Node.string(node);

  if (isLinkElement(node) && options.markdownLinks) return `[${serializeToText(node.children)}](${node.url})`;

  if (isVariableElement(node) && options.encodeVariables)
    return `{${options.variablesMap ? (options.variablesMap[node.id]?.name ?? node.id) : node.name}}`;

  return nodesToString(node.children, options).join('');
};

const nodesToString = (nodes: Descendant[], options: TextSerializerOptions): string[] =>
  nodes.map((node) => nodeToString(node, options));

export const serializeToText = (
  content: SlateTextValue,
  { variablesMap = {}, markdownLinks = false, encodeVariables = true }: TextSerializerOptions = {}
): string => nodesToString(content, { variablesMap, markdownLinks, encodeVariables }).join('\n').trim();
