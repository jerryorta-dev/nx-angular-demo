import type {StorybookConfig} from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    // '../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../libs/shared/ui-design-library-components/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  staticDirs: [
    {
      from: '../../../libs/shared/ui-design-library-components/src/assets',
      to: 'assets/dlc'
    }
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  }
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
