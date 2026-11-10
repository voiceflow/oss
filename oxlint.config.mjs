import base from '@voiceflow/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  ...base,

  ignorePatterns: [...base.ignorePatterns],

  rules: { ...base.rules },

  overrides: [...base.overrides],
});
