<script>
  import Article from "./Article.svelte";
  import Circular from "./Circular.svelte";
  import Grid from "./Grid.svelte";
  import GridItem from "./GridItem.svelte";
  import HeadlineTertiary from "./HeadlineTertiary.svelte";
  import Paragraph from "./Paragraph.svelte";
  import Spacing from "./Spacing.svelte";
  import WideArticle from "./WideArticle.svelte";
</script>

<Article>
  <section>
    <p class="md:text-center text-left text-secondary">
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
      <Paragraph isTertiary="{true}">
        I build websites in terms of the look and feel and how users will
        interact with them across all common browsers and devices. I love to
        code, no matter if it is organized in a big monolith or in tiny
        micro-frontends. I use technologies like
        <span class="font-bold">HTML5</span>,
        <span class="font-bold">CSS3, SASS and TailwindCSS</span>,
        <span class="font-bold">ES6 and TypeScript</span>,
        <span class="font-bold"
          >Vue.js, nuxt.js, Svelte.js and web components</span
        >, <span class="font-bold">Webpack and RollUp</span> and
        <span class="font-bold">Jest, Cypress and Puppeteer</span>.
      </Paragraph>
    </GridItem>
    <GridItem>
      <Circular>
        IxD
      </Circular>
      <HeadlineTertiary>
        Interaction Design
      </HeadlineTertiary>
      <Paragraph isPrimary="{false}">
        For me, web design is more than writing code all day long. Frameworks
        are there for organizing our minds, not our code. My focus is not only
        on the
        <span class="font-bold">developer & designer experience (DX)</span>
        but also on the usability of the page for a perfect
        <span class="font-bold">user experience (UX)</span>. Therefore I use
        techniques of the human computer interaction to create architectures and
        <span class="font-bold">user interfaces (UI)</span>.
      </Paragraph>
    </GridItem>
  </Grid>
</WideArticle>
