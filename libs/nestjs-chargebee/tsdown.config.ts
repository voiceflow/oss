import defaultConfig from '@voiceflow/tsdown-config';
import { mergeConfig } from 'tsdown';

export default mergeConfig(defaultConfig, {
  entry: {
    index: 'src/main.ts',
    models: 'src/models/mod.ts',
  },
});
