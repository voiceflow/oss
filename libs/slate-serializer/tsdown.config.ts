import defaultConfig from '@voiceflow/tsdown-config';
import { mergeConfig } from 'tsdown';

export default mergeConfig(defaultConfig, {
  entry: {
    index: 'src/index.ts',
    text: 'src/serializers/text.ts',
    markdown: 'src/serializers/markdown.ts',
    jsx: 'src/serializers/jsx.tsx',
  },
});
