import baseConfig from '@voiceflow/knip-config';
import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ...baseConfig,

  tsdown: true,

  workspaces: {
    '.': {
      project: ['!.yarn'],
      ignoreDependencies: ['source-map-support', '@voiceflow/husky-config'],
    },

    'libs/nestjs-chargebee': {
      ignoreDependencies: ['@nestjs/core'],
    },

    'libs/universal-mock': {
      ignoreDependencies: ['vitest'],
    },
  },

  ignoreDependencies: ['@vitest/coverage-v8'],
};

export default config;
