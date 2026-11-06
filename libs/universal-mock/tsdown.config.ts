import defaultConfig from '@voiceflow/tsdown-config';
import { mergeConfig } from 'tsdown';

export default mergeConfig(defaultConfig, {
  exports: {
    customExports: {
      './vitest': './vitest/main.mjs',
    },
  },
});
