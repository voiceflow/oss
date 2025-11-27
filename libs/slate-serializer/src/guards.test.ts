import { createElement } from '@test/fixtures';
import { SlateTextElementType } from '@voiceflow/dtos-interact';
import { describe, expect, it } from 'vitest';

import { isLinkElement } from '@/guards';

describe('Guards', () => {
  describe('isLinkElement()', () => {
    it('valid link', () => {
      expect(isLinkElement(createElement({ type: SlateTextElementType.LINK }))).to.be.equal(true);
    });

    it('invalid link', () => {
      expect(isLinkElement(createElement())).to.be.equal(false);
    });
  });
});
