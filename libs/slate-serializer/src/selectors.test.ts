import { createElement, createText } from '@test/fixtures';
import { describe, expect, it } from 'vitest';

import { getElementCSSProperties, getElementStyles, getTextCSSProperties, getTextStyles } from '@/selectors';

describe('Selectors', () => {
  describe('getTextCSSProperties()', () => {
    it('empty', () => {
      expect(getTextCSSProperties(createText())).to.be.deep.equal({});
    });

    it('color', () => {
      expect(getTextCSSProperties(createText({ color: { r: 0, g: 255, b: 120, a: 0.7 } }))).to.be.deep.equal({
        color: 'rgba(0,255,120,0.7)',
      });
      expect(getTextCSSProperties(createText({ color: { r: 0, g: 255, b: 120, a: 0 } }))).to.be.deep.equal({
        color: 'rgba(0,255,120,0)',
      });
      expect(getTextCSSProperties(createText({ color: { r: 0, g: 0, b: 0, a: 0 } }))).to.be.deep.equal({
        color: 'rgba(0,0,0,0)',
      });
    });

    it('fonts', () => {
      expect(getTextCSSProperties(createText({ fontFamily: 'Arial' }))).to.be.deep.equal({ fontFamily: '"Arial"' });
      expect(getTextCSSProperties(createText({ fontWeight: '600' }))).to.be.deep.equal({ fontWeight: 600 });
      expect(getTextCSSProperties(createText({ italic: true }))).to.be.deep.equal({ fontStyle: 'italic' });
      expect(
        getTextCSSProperties(createText({ fontFamily: 'Arial', fontWeight: '600', italic: false }))
      ).to.be.deep.equal({
        fontFamily: '"Arial"',
        fontWeight: 600,
      });
    });

    it('decoration', () => {
      expect(getTextCSSProperties(createText({ underline: true }))).to.be.deep.equal({ textDecoration: 'underline' });
      expect(getTextCSSProperties(createText({ underline: false, strikeThrough: true }))).to.be.deep.equal({
        textDecoration: 'line-through',
      });
      expect(getTextCSSProperties(createText({ underline: true, strikeThrough: true }))).to.be.deep.equal({
        textDecoration: 'underline line-through',
      });
    });
  });

  describe('getElementCSSProperties()', () => {
    it('empty', () => {
      expect(getElementCSSProperties(createElement())).to.be.deep.equal({});
    });

    it('textAlign', () => {
      expect(getElementCSSProperties(createElement({ textAlign: 'left' }))).to.be.deep.equal({ textAlign: 'left' });
      expect(getElementCSSProperties(createElement({ textAlign: 'right' }))).to.be.deep.equal({ textAlign: 'right' });
    });
  });

  describe('getTextStyles()', () => {
    it('empty', () => {
      expect(getTextStyles(createText())).to.be.equal('');
    });

    it('lowercase', () => {
      expect(
        getTextStyles(
          createText({ color: { r: 0, g: 255, b: 120, a: 0.7 }, italic: true, underline: true, strikeThrough: true })
        )
      ).to.be.equal('color:rgba(0,255,120,0.7);font-style:italic;text-decoration:underline line-through');
    });

    it('camelCase', () => {
      expect(getTextStyles(createText({ fontFamily: 'Arial', fontWeight: '600' }))).to.be.equal(
        'font-weight:600;font-family:"Arial"'
      );
    });
  });

  describe('getElementStyles()', () => {
    it('empty', () => {
      expect(getElementStyles(createElement())).to.be.equal('');
    });

    it('lowercase', () => {
      expect(getElementStyles(createElement({ textAlign: 'left' }))).to.be.equal('text-align:left');
    });
  });
});
