
##  Create App
```
npx create-nx-workspace@latest
```

![[nx-cli-command-create-workspace.png]]

***Document as you work***

## Add CZ

```
npm install cz-conventional-changelog --save-dev
```

#### add to `.cz.json` in root directory

```json
{  
  "path": "node_modules/cz-conventional-changelog/"  
}
```



## Move app to domain

delete app and recreate using nx script

### Add assets 

[See NX guide](https://nx.dev/recipes/tips-n-tricks/include-assets-in-build)

Create directory `apps/task-manager/todo/src/assets`

Add to project.json:

```json
"assets": [  
  "apps/[domain]/[app]/src/assets",
  ]
```

### Add npm script:

```json
{
  "app": "npx nx run [app]:serve:development"
}
```


## Upgrade prettier

Enable prettier to format angular razor syntax in  `*.html` files

```bash
npm install prettier@3.3.2 --save-dev
```

In root directory, replace contents of `.prettierrc` with 

```json
{  
  "bracketSpacing": false,  
  "printWidth": 100,  
  "trailingComma": "none",  
  "arrowParens": "avoid",  
  "bracketSameLine": true,  
  "singleQuote": true,  
  "overrides": [  
    {  
      "files": ["**/*.css", "**/*.scss"],  
      "options": {  
        "singleQuote": false  
      }  
    },  
    {  
      "files": "*.html",  
      "options": {  
        "parser": "angular",  
        "singleQuote": false  
      }  
    }  
  ]  
}
```

## Setup Tailwind in App

![[set-up-tailwind.png]]



##  Create Server

[Nx Nest Reference](https://nx.dev/nx-api/nest)
[Why Nest](https://www.brilworks.com/blog/nestjs-vs-nextjs/)


```
nx add @nx/nest
```

### Create App

![[nest-app-generate.png]]

1. Use default configuration
2. Name app `api`

![[nest-app-config.png]]

Fill in name and directory. This will allow a different app name from the directory name.

![[nest-app-strict.png]]

Select strict mode.




### Enable Cors

[Reference Cors](https://docs.nestjs.com/security/cors)

In the `main.ts` file of api.

```typescript
app.enableCors({  
  origin: '*',  
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  
  preflightContinue: false,  
});
```

![[enable-cors.png]]

### Add npm script:

```json
{
 "s.todo.api": "npx nx run todo-api:serve:development"
}
```

## Create Shared Domain Library



![[create-domain-library.png]]

![[configure-shared-domain.png]]

### Update .nx library config

```json
"@nx/angular:library": {  
  "linter": "eslint",  
  "unitTestRunner": "jest",  
  "style": "scss"  
},
```


## Create Design Library Components 

![[create-domain-library.png]]

Name: design-library-components
directory: libs/shared/ui-design-library-components
publishable: false
changeDetection: OnPush
importPath: @nx-angular-demo/shared-dlc
prefix-dlc
style: scss
viewEncapsulation: None
Update eslint selectors to `dlc`
Update project.json prefix to `dlc`


#### Add DLC to tailwind config

In the file `apps/task-manager/todo/tailwind.config.js`

add

```typescript
,  
  
join(__dirname, '../../../libs/shared/ui-design-library-components/src/**/**/!(*.spec).{ts,html}'),  
...createGlobPatternsForDependencies(  
  join(__dirname, '../../../libs/shared/ui-design-library-components/src')  
)

```


### Add App domain
![[create-app-domain.png]]

Add UI to domain
![[create-ui-library.png]]


### Add assets directory for ui-task-manager

Create a directory at `libs/task-manager/ui-task-manager/src/assets`
Add a `.gitKeep` file in that directory.

In the app's project.json, include assets:

```json
"assets": [  
  ... 
  {    
    "glob": "**/*",  
    "input": "libs/task-manager/ui-task-manager/src/assets",  
    "output": "assets/ui-task-manager"  
  },
  ...
],
```

 The path to any assets from the dlc will start with `assets/ui-task-manager/`.


### Add UI Tailwind Config

```typescript

join(__dirname, '../../../libs/task-manager/ui-task-manager/src/**/**/!(*.spec).{ts,html}'),  
...createGlobPatternsForDependencies(  
  join(__dirname, '../../../libs/task-manager/ui-task-manager/src')  
)
```

## Add shared tailwind-preset
### Install @tailwindcss/aspect-ratio

```
npm install @tailwindcss/aspect-ratio

```

### Create directory `libs/shared/tailwind-preset`

### Add the file project.json to 
`libs/shared/tailwind-preset/project.json`

```json

{  
  "name": "tailwind-preset",  
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",  
  "projectType": "library",  
  "sourceRoot": "libs/tailwind-preset",  
  "tags": [],  
  "// targets": "to see all targets run: nx show project tailwind-preset --web",  
  "targets": {}  
}

```


### Add tailwind preset to
`libs/shared/tailwind-preset/tailwind.config.js`

```javascript

/**  
 * See https://github.com/tailwindlabs/tailwindcss/issues/1232#issuecomment-1111937404 * to convert rem to px */module.exports = {  
  theme: {  
    extend: {  
      spacing: {  
        sm: '0.5rem',  
        md: '1rem',  
        lg: '1.5rem',  
        xl: '2rem'  
      },  
      fontSize: {  
        h1: '48px',  
        h2: '36px',  
        h3: '30px',  
        h4: '24px',  
        h5: '20px',  
        h6: '16px'  
      },  
      fontWeight: {  
        h1: 500,  
        h2: 500,  
        h3: 700,  
        h4: 700,  
        h5: 700,  
        h6: 700  
      },  
      colors: {  
        
      },  
      // https://github.com/tailwindlabs/tailwindcss-aspect-ratio  
      aspectRatio: {  
        auto: 'auto',  
        square: '1 / 1',  
        video: '16 / 9',  
        1: '1',  
        2: '2',  
        3: '3',  
        4: '4',  
        5: '5',  
        6: '6',  
        7: '7',  
        8: '8',  
        9: '9',  
        10: '10',  
        11: '11',  
        12: '12',  
        13: '13',  
        14: '14',  
        15: '15',  
        16: '16'  
      }  
    }  },  plugins: [require('@tailwindcss/aspect-ratio')]  
};

```

### Add global config to app `tailwind.cofig.js`

```javascript

const globalConfig = require('../../../libs/shared/tailwind-preset/tailwind.config.js');


module.exports = {
  
   presets: [globalConfig]
}


```

## Add Angular Material


### Install material

```
npm i @angular/material
```

### Run Material generator

```
npx nx g @angular/material:ng-add --project=todo
```

![[add-material.png]]

### Move Tailwind base styles above mat.core

in `apps/task-manager/todo/src/styles.scss`

```scss

// Comment out the line below if you want to use the deprecated `color` inputs.  
// @include mat.color-variants-backwards-compatibility($todo-theme);  
@tailwind base;  
@tailwind components;  
@tailwind utilities;  
  
// Include the common styles for Angular Material. We include this here so that you only  
// have to load a single css file for Angular Material in your app.  
// Be sure that you only ever include this mixin once!  
@include mat.core();

```



## Create Theme Architecture for Design Library Components ( DLC )

### Add assets for theme

Create directory `libs/shared/ui-design-library-components/src/assets`

In the app's project.json, include assets:

```json
"assets": [  
  ... 
  {    
    "glob": "**/*",  
    "input": "libs/shared/ui-design-library-components/src/assets",  
    "output": "assets/dlc"  
  },
  ...
],
```

The path to any assets from the dlc will start with `assets/dlc/`.


In the app's `project.json` include themes:

```json
"scripts": [],  
"stylePreprocessorOptions": {  
  "includePaths": [  
    "libs/shared/design-library-components/src/lib/themes"  
  ]  
}
```

Configure Angular Material theme in `dlc-theme` mixin.

## Add Storybook

### Create Angular application


![[create-storybook.png]]

![[storybook-app-params.png]]

### Add Nx Storybook

https://nx.dev/nx-api/storybook

```
nx add @nx/storybook
```

Configure for Angular

```
nx g @nx/angular:storybook-configuration storybook-app
```

![[configure-storybook.png]]

### Update Storybook Configurations

Update `apps/storybook-app/.storybook/tsconfig.json` to _only include_ Design Library Components

Replace:
```json

"exclude": ["../**/*.spec.ts"],  
"include": [  
  "../src/**/*.stories.ts",  
  "../src/**/*.stories.js",  
  "../src/**/*.stories.jsx",  
  "../src/**/*.stories.tsx",  
  "../src/**/*.stories.mdx",  
  "*.js",  
  "*.ts"  
]

```

with: 

```json

"exclude": [  
  "../../../libs/shared/ui-design-library-components/src/**/*.spec.ts"  
],  
"include": [  
  "../../../libs/shared/ui-design-library-components/src/**/*.stories.ts",  
  "../../../libs/shared/ui-design-library-components/src/**/*.stories.js",  
  "../../../libs/shared/ui-design-library-components/src/**/*.stories.jsx",  
  "../../../libs/shared/ui-design-library-components/src/**/*.stories.tsx",  
  "../../../libs/shared/ui-design-library-components/src/**/*.stories.mdx",  
  "*.js",  
  "*.ts"  
]

```


In the file `apps/storybook-app/.storybook/main.ts` 

Replace stories node:

```typescript
stories: ['../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
```

with 

```typescript
stories: [  
  // '../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)',  
  '../../../libs/shared/ui-design-library-components/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'  
],
```

Add staticDirs node:

```typescript
staticDirs: [  
  {    
   from: '../../../libs/shared/ui-design-library-components/src/assets',  
   to: 'assets/dlc'  
  }  
],
```

_this "to" path needs to match same assets path in project.json

Add theme file based on [https://github.com/jerryorta-dev/nx-angular-demo/blob/main/apps/storybook-app/.storybook/theme.ts](https://github.com/jerryorta-dev/nx-angular-demo/blob/main/apps/storybook-app/.storybook/theme.ts)

Add manager file based on [https://github.com/jerryorta-dev/nx-angular-demo/blob/main/apps/storybook-app/.storybook/manager.ts](https://github.com/jerryorta-dev/nx-angular-demo/blob/main/apps/storybook-app/.storybook/manager.ts)

#### Update tailwind.config.js

Update tailwind.config.js with 

```typescript
join(__dirname, '../../libs/shared/ui-design-library-components/src/**/**/!(*.spec).{ts,html}'),  
...createGlobPatternsForDependencies(join(__dirname, '../../libs/shared/ui-design-library-components/src'))
```

#### Update project.json

 assets node:

```json

{  
  "glob": "**/*",  
  "input": "libs/shared/ui-design-library-components/src/assets",  
  "output": "assets/dlc"  
},
```

options node: 

```json

"stylePreprocessorOptions": {  
  "includePaths": ["libs/shared/ui-design-library-components/src/lib/themes"]  
},


```

#### Update styles.scss

_should be same for all apps in this monorepo_

[Based on this file](https://github.com/jerryorta-dev/nx-angular-demo/blob/main/apps/storybook-app/src/styles.scss)


## CapacitorJS

The docs for latest version are fine - https://capacitorjs.com/docs/getting-started

Two edits to use with a production url. In the file `apps/task-manager/mobile/vite.config.ts`

Change to:

```typescript
export default defineConfig({  
  root: './src',  
  build: {  
    outDir: '../www',  // <--- update
    minify: false,  
    emptyOutDir: true,  
  },});
```


Remove the JSON file `apps/task-manager/mobile/capacitor.config.json`, and create a file similar to this: [https://github.com/jerryorta-dev/nx-angular-demo/blob/main/apps/task-manager/mobile/capacitor.config.ts](https://github.com/jerryorta-dev/nx-angular-demo/blob/main/apps/task-manager/mobile/capacitor.config.ts)

## Electronjs

TODO