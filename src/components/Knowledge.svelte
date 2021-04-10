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

  const markup = ["HTML5", "Pug", "Mustache", "Handlebars", "CSS3", "SASS", "BEM", "Bulma", "Tailwindcss"]
  const js = ["ES6", "TypeScript", "Vue.js", "Nuxt.js", "Svelte.js", "Sapper.js", "web components", "Storybook", "Vite", "Webpack", "RollUp"]
  const tooling = ["Jest", "Cypress", "Puppeteer", "Netlify", "Vercel"]
</script>

<Article>
  <section>
    <p class="md:text-center text-left text-tertiary dark:text-tertiary-light">
      The era of the desktop web is over. The era of the mobile web will end
      soon. The embedded web era will come. Digital products in the web have to
      be designed and developed for the best user experience. That's what I do.
    </p>
  </section>
</Article>
<WideArticle>
  <Spacing></Spacing>
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
    <Tags labels={markup} />
    <Tags labels={js} />
    <Tags labels={tooling} />
  </div>
</WideArticle>
