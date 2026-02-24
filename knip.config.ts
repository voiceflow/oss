import baseConfig from '@voiceflow/knip-config';
import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ...baseConfig,

  workspaces: {
    '.': {
      project: ['!.yarn'],
      ignoreDependencies: ['source-map-support', '@voiceflow/husky-config'],
    },

    'libs/nestjs-chargebee': {
      ignoreDependencies: ['@nestjs/core'],
    },

    'libs/slate-serializer': {
      entry: ['src/index.ts', 'src/serializers/jsx.tsx', 'src/serializers/markdown.ts', 'src/serializers/text.ts'],
    },

    'libs/universal-mock': {
      ignoreDependencies: ['vitest'],
    },
  },

  ignoreDependencies: ['@vitest/coverage-v8'],
};

export default config;
