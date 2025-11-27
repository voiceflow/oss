import type {
  AnySlateTextElement,
  Descendant,
  SlateText,
  SlateTextLinkElement,
  SlateTextValue,
  SlateTextVariableElement,
} from '@voiceflow/dtos-interact';
import React from 'react';
import * as Slate from 'slate';

import { isLinkElement, isVariableElement } from '../guards';
import { getElementCSSProperties, getTextCSSProperties } from '../selectors';

export interface JSXSerializerOptions {
  variablesMap?: Partial<Record<string, { id: string; name: string }>>;
  transformHref?: (href: string) => string;
}

const serializeTextNode = (node: SlateText, index: number): React.ReactNode => {
  const styles = getTextCSSProperties(node);

  return (
    <span key={index} style={styles}>
      {node.text || <>&#xFEFF;</>}
    </span>
  );
};

const serializeLinkElement = (
  node: SlateTextLinkElement,
  index: number,
  options: JSXSerializerOptions
): React.ReactNode => {
  const children = node.children.map((node, index) => serializeNode(node, index, options));
  const styles = getElementCSSProperties(node);
  const href = options.transformHref?.(node.url ?? '') ?? node.url ?? '';

  return (
    <a
      key={index}
      rel="noopener noreferrer"
      href={href}
      target="_blank"
      style={{ ...styles, pointerEvents: 'all' }}
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();

        if (!href) return;

        window.open(href, '_blank', 'noopener=true,noreferrer=true')?.focus();
      }}
    >
      {children}
    </a>
  );
};

const serializeVariableElement = (node: SlateTextVariableElement, index: number, options: JSXSerializerOptions) => (
  <span key={index}>{`{${options.variablesMap ? (options.variablesMap[node.id]?.name ?? node.id) : node.name}}`}</span>
);

const serializeElementNode = (
  node: AnySlateTextElement,
  index: number,
  options: JSXSerializerOptions
): React.ReactNode => {
  if (isLinkElement(node)) return serializeLinkElement(node, index, options);
  if (isVariableElement(node)) return serializeVariableElement(node, index, options);

  const children = node.children.map((node, index) => serializeNode(node, index, options));
  const styles = getElementCSSProperties(node);

  return (
    <div key={index} style={styles}>
      {children}
    </div>
  );
};

const serializeNode = (node: Descendant, index: number, options: JSXSerializerOptions): React.ReactNode =>
  // eslint-disable-next-line no-nested-ternary
  Slate.Text.isText(node)
    ? serializeTextNode(node, index)
    : Slate.Element.isElement(node)
      ? serializeElementNode(node, index, options)
      : null;

export const serializeToJSX = (content: SlateTextValue, options: JSXSerializerOptions = {}): React.ReactNode =>
  content.map((node, index) => serializeNode(node, index, options));
