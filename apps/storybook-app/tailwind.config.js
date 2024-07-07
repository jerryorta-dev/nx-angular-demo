const {createGlobPatternsForDependencies} = require('@nx/angular/tailwind');
const {join} = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),

    join(__dirname, '../../libs/shared/ui-design-library-components/src/**/**/!(*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(join(__dirname, '../../libs/shared/ui-design-library-components/src'))
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
