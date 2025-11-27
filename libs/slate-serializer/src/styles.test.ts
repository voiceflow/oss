import { describe, expect, it } from 'vitest';

import { convertCSSPropertiesToStyles, cssPropertyNameToStyleName } from '@/styles';

describe('Styles', () => {
  describe('cssPropertyNameToStyleName()', () => {
    it('lowercase', () => {
      expect(cssPropertyNameToStyleName('color')).to.be.equal('color');
    });

    it('camel case', () => {
      expect(cssPropertyNameToStyleName('backgroundColor')).to.be.equal('background-color');
      expect(cssPropertyNameToStyleName('borderTopLeftRadius')).to.be.equal('border-top-left-radius');
    });
  });

  describe('convertCSSPropertiesToStyles()', () => {
    it('empty', () => {
      expect(convertCSSPropertiesToStyles({})).to.be.equal('');
    });

    it('valid', () => {
      expect(
        convertCSSPropertiesToStyles({
          color: 'red',
          border: '1px solid blue',
          borderTopLeftRadius: '10em',
          fontFamily: 'Arial',
        })
      ).to.be.equal('color:red;border:1px solid blue;border-top-left-radius:10em;font-family:Arial');
    });
  });
});
