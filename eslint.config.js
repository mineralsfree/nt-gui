import reactConfig from '@northern.tech/eslint-config/react.js';
import storybookConfig from '@northern.tech/eslint-config/storybook.js';
import libraryConfig from '@northern.tech/eslint-config/library.js'

export default [
  ...reactConfig,
  ...storybookConfig,
  ...libraryConfig,
  {
    ignores: ['node_modules/', 'dist/', 'packages/types', 'packages/eslint-config', 'storybook-static/', '**/*.md']
  }
];
