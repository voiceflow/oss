import baseConfig from '@voiceflow/vitest-config';
import type { ViteUserConfig } from 'vitest/config';
import { mergeConfig } from 'vitest/config';

export default mergeConfig<ViteUserConfig, ViteUserConfig>(baseConfig, {
  test: {
    projects: ['{apps,libs}/*/vitest.config.{mjs,mts}'],
  },
});
