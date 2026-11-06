import defaultConfig from '@voiceflow/tsdown-config';
import { mergeConfig } from 'tsdown';

export default mergeConfig(defaultConfig, {
  entry: {
    index: 'src/index.ts',
  },
});
