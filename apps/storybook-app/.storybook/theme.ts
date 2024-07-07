import {create} from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'Nx Angular Storybook',
  brandUrl: 'https://nx.dev/recipes/storybook/overview-angular',
  brandImage: `<svg role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      aria-hidden="true"
      class="h-8 w-8">
        <title>Nx</title>
        <path d="m12 14.1-3.1 5-5.2-8.5v8.9H0v-15h3.7l5.2 8.9v-4l3 4.7zm.6-5.7V4.5H8.9v3.9h3.7zm5.6 4.1a2 2 0 0 0-2 1.3 2 2 0 0 1 2.4-.7c.4.2 1 .4 1.3.3a2.1 2.1 0 0 0-1.7-.9zm3.4 1c-.4 0-.8-.2-1.1-.6l-.2-.3a2.1 2.1 0 0 0-.5-.6 2 2 0 0 0-1.2-.3 2.5 2.5 0 0 0-2.3 1.5 2.3 2.3 0 0 1 4 .4.8.8 0 0 0 .9.3c.5 0 .4.4 1.2.5v-.1c0-.4-.3-.5-.8-.7zm2 1.3a.7.7 0 0 0 .4-.6c0-3-2.4-5.5-5.4-5.5a5.4 5.4 0 0 0-4.5 2.4l-1.5-2.4H8.9l3.5 5.4L9 19.5h3.6L14 17l1.6 2.4h3.5l-3.1-5a.7.7 0 0 1 0-.3 2.7 2.7 0 0 1 2.6-2.7c1.5 0 1.7.9 2 1.3.7.8 2 .5 2 1.5a.7.7 0 0 0 1 .6zm.4.2c-.2.3-.6.3-.8.6-.1.3.1.4.1.4s.4.2.6-.3V15z"></path>
    </svg>`,
  brandTarget: '_self'
});