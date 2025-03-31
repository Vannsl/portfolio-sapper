<script>
  import Article from "./Article.svelte";
  import Circular from "./Circular.svelte";
  import Grid from "./Grid.svelte";
  import GridItem from "./GridItem.svelte";
  import HeadlineTertiary from "./HeadlineTertiary.svelte";
  import Paragraph from "./Paragraph.svelte";
  import Spacing from "./Spacing.svelte";
  import WideArticle from "./WideArticle.svelte";
  import Tags from "./Tags.svelte";

  const markup = ["HTML", "CSS", "Tailwind CSS"]
  const js = ["JavaScript", "TypeScript", "Vue.js", "Pinia", "Histoire", "Vite", "Vitest"]
  const tooling = ["Jest"]
  const archive = ["Netlify", "Vercel", "Cypress", "AXE", "Pug", "Mustache", "Handlebars", "SASS", "DaisyUI", "BEM", "Bulma",  "Sapper.js", "Playwright", "Svelte.js", "Nuxt.js", "Vuex", "web components", "Storybook", "Webpack", "RollUp"]
</script>

<WideArticle>
  <Spacing></Spacing>
  <h2 class="sm:text-2xl text-l text-center tracking-widest uppercase">What I do</h2>
  <Grid>
    <GridItem>
      <Circular>
        &lang; / &rang;
      </Circular>
      <HeadlineTertiary>
        Web Development
      </HeadlineTertiary>
      <Paragraph>
        I build websites in terms of the look and feel and how users will
        interact with them across all common browsers and devices. I love to
        code, no matter if the project is organized in a <strong>big monolith</strong> or in <strong>tiny
        micro-frontends</strong>.
      </Paragraph>
    </GridItem>
    <GridItem>
      <Circular>
        IxD
      </Circular>
      <HeadlineTertiary>
        Interaction Design
      </HeadlineTertiary>
      <Paragraph>
        Frameworks are there for organizing our minds, not our code. My focus is 
        on both the
        <span class="font-bold">developer & designer experience (DX)</span>
        and the
        <span class="font-bold">user experience (UX)</span> to create the best 
        <span class="font-bold">user interfaces (UI)</span> possible.
      </Paragraph>
    </GridItem>
  </Grid>

  <Spacing />

  <div class="relative">
    <h3 class="font-lg uppercase font-bold leading-wide text-center mt-10 mb-2 dark:text-gray-100">Primary Tools</h3>
    <Tags labels={markup} />
    <Tags labels={js} />
    <Tags labels={tooling} />
    <h3 class="font-lg uppercase font-bold leading-wide text-center mt-10 mb-2 dark:text-gray-100">Secondary Tools</h3>
    <div class="text-sm">
      <Tags labels={archive}  />
    </div>
  </div>
</WideArticle>
