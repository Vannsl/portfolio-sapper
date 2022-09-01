# Vannsl Portfolio

[https://vannsl.netlify.com](https://vannsl.netlify.com)

built with [Sapper](https://github.com/sveltejs/sapper) and [TailwindCSS](https://tailwindcss.com/) deployed on [Netlify](https://www.netlify.com/).

## Usage

```bash
npm install # or yarn
npm run dev
npm run dev:tailwind
```

## Tests

This projects contains E2E tests with [Cypress](https://www.cypress.io/).

```bash
npm run test
```

## Production mode and deployment

To start a production version of your app, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

## Static generation

The static generated files will be written to `./__sapper__/export`

```bash
npm run export
```
