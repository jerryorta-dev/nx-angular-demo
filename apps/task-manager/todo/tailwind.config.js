const {createGlobPatternsForDependencies} = require('@nx/angular/tailwind');
const {join} = require('path');
const globalConfig = require('../../../libs/shared/tailwind-preset/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),

    join(__dirname, '../../../libs/shared/ui-design-library-components/src/**/**/!(*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(
      join(__dirname, '../../../libs/shared/ui-design-library-components/src')
    ),

    join(__dirname, '../../../libs/task-manager/ui-task-manager/src/**/**/!(*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(
      join(__dirname, '../../../libs/task-manager/ui-task-manager/src')
    )
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  presets: [globalConfig]
};
