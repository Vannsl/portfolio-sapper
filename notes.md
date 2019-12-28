Statically generated portfolio with Svelte and Swapper

comparison to Vue/Nuxt:
npm run generate is npm run export with dist folder **sapper**/export
Head element is

```html
<svelte:head>
  <title>Vannsl - Vanessa Böhner Portfolio</title>
</svelte:head>
```

IDE syntax highlighting settings: just HTML.
feels more like pure HTML, what is the advantage of vue compared to JSX.

No wrapping div container of a single file component.

accessibility warnings

\$ npm i
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN TODO@0.0.1 No repository field.
npm WARN TODO@0.0.1 No license field.

added 237 packages from 178 contributors and audited 1605 packages in 5.663s
found 1 moderate severity vulnerability
We found a potential security vulnerability in one of your dependencies. github

npm install tailwindcss postcss-cli --save-dev
npm install @fullhuman/postcss-purgecss
./node\*modules/.bin/tailwind init tailwind.js
touch postcss.config.js
const tailwindcss = require("tailwindcss");

// only needed if you want to purge
const purgecss = require("@fullhuman/postcss-purgecss")({
content: ["./src/**/*.svelte", "./src/**/*.html"],
defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
plugins: [
tailwindcss("./tailwind.js"),

    // only needed if you want to purge
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])

]
};

// rollup.config.js
svelte({
dev,
hydratable: true,
emitCss: true,
preprocess: sveltePreprocess({ postcss: true })
}),

App.svelte | index.svelte

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

(not scoped, but extra global)

does not compile with html errors
