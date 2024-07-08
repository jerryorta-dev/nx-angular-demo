# Nx Angular Monorepo Architecture Sample

This repo is an example of a monorepo architecture using Nx and Angular. It contains a simple todo application with a shared library and a backend API.

## Commands

See the package.json to run the following comands:

- `npm run s.todo.dev` to start the development server for the todo app
- `npm run b.todo.dev` to build the todo app for development
- `npm run s.todo.api` to start the development server for the api
- `npm run storybook` to start the storybook server
- `npm run build-storybook` to build the storybook app

## Frameworks
The monorepo contains the following frameworks:

- [Nx](https://nx.dev) - Smart Monorepos · Fast CI
- [Angular](https://angular.io) - One framework. Mobile & desktop.
- [NgRx](https://ngrx.io) - Reactive State for Angular
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for rapid UI development.
- [Angular Material](https://material.angular.io) - Material Design components for Angular
- [Capacitor](https://capacitorjs.com) - Build cross-platform Native Progressive Web Apps for iOS, Android, and the web
- [NestJS](https://nestjs.com) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [Storybook](https://storybook.js.org) - The UI component workshop
- [Jest](https://jestjs.io) - Delightful JavaScript Testing
- [Cypress](https://www.cypress.io) - Fast, easy and reliable testing for anything that runs in a browser.
- [Prettier](https://prettier.io) - Opinionated Code Formatter
- [ESLint](https://eslint.org) - Find and fix problems in your JavaScript code

## Directory Structure

The monorepo is structured as follows ( not including e2e apps ):

```
apps/
  storybook-app/                       # Storybook app
  task-manager/                        # Domain ( Domain Driven Design ) for TODO app
    api/                               # Backend API for the TODO app    
    capacitorjs/                       # CapacitorJS - android, ios - for todo app
    todo/                              # Angular app for the TODO app

libs/
  shared/                              # Shared libraries for ALL apps and domain libraries
    domain/                            # Shared business logic for all apps and libraries
    tailwind-preset/                   # Shared tailwindcss preset
    ui-design-library-components/      # Shared UI components for all apps and ui libraries
  task-manager/                        # Domain ( Domain Driven Design ) for TODO app
    domain/                            # Business logic for the task-manager domain               
    ui-task-manager/                   # UI components for the task-manager domain _only_  

```


## Documentation
This project was generated using [Nx](https://nx.dev). See [README](./docs/nx.md) for more information.

See [Create Nx Workspace](./docs/create-nx-workspace.md) for how I created this architecture.
