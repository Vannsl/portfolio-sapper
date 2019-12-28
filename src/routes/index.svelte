<script>
  import Article from "../components/Article.svelte";
  import WideArticle from "../components/WideArticle.svelte";
  import Circular from "../components/Circular.svelte";
  import Hero from '../components/Hero.svelte';
  import Grid from '../components/Grid.svelte';
  import HeadlineTertiary from '../components/HeadlineTertiary.svelte';
</script>

<svelte:head>
  <title>Vannsl - Vanessa Böhner Portfolio</title>
</svelte:head>

<Hero/>

<Article>
  <section class="text-center">
    <p class="text-primary font-light">
      The era of the desktop web is over. The era of the mobile web will end soon. The embedded web era will come. Digital products in the web have to be designed and developed for the best user experience. That's what I do.
    </p>
  </section>
</Article>
<WideArticle>
  <Grid>
    <section slot="left">
        <Circular>
          &lang; / &rang;
        </Circular>
      <HeadlineTertiary>
        Web Development
      </HeadlineTertiary>
      <p class="text-secondary font-light">
        I build websites in terms of the look and feel and how users will
        interact with them across all common browsers and devices. I love to code, no matter if it is organized in a big monolith or in tiny micro-frontends. I use
        technologies like <span class="font-normal">HTML5</span>,
        <span class="font-normal">CSS3 & SASS & TailwindCSS</span>,
        <span class="font-normal">ES6 & TypeScript</span>, <span class="font-normal">Vue.js & nuxt.js & Svelte.js & web components</span>,
        <span class="font-normal">Webpack</span> and
        <span class="font-normal">Rollup</span>.
    </section>
    <section slot="right">
      <Circular>
        IxD
      </Circular>
      <HeadlineTertiary>
        Interaction Design
      </HeadlineTertiary>
      <p class="text-secondary font-light">
        For me, web design is more than writing code all day long. Frameworks are there for organizing our minds, not our code. My focus is not only on the <span class="font-normal">developer & designer experience (DX)</span> but also on the usability of the page for a perfect <span class="font-normal">user experience (UX)</span>. Therefore I use techniques of the human computer interaction to create architectures and <span class="font-normal">user interfaces (UI)</span>.
    </section>
  </Grid>
</WideArticle>