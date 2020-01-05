<script>
  import Article from "../components/Article.svelte";
  import WideArticle from "../components/WideArticle.svelte";
  import Circular from "../components/Circular.svelte";
  import Hero from '../components/Hero.svelte';
  import Grid from '../components/Grid.svelte';
  import GridItem from "../components/GridItem.svelte";
  import HeadlineTertiary from '../components/HeadlineTertiary.svelte';
  import Spacing from "../components/Spacing.svelte";
  import Paragraph from "../components/Paragraph.svelte";
  import Header from "../components/Header.svelte";
</script>

<svelte:head>
  <title>Vannsl - Vanessa Böhner Portfolio</title>
  <meta name="description" content="Hi, I am Vannsl - a web developer.">
</svelte:head>

<Hero/>

<Spacing></Spacing>
<Article>
  <section>
    <p class="md:text-center text-left text-primary">
      The era of the desktop web is over. The era of the mobile web will end soon. The embedded web era will come. Digital products in the web have to be designed and developed for the best user experience. That's what I do.
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
      <Paragraph isPrimary={true}>
        I build websites in terms of the look and feel and how users will
        interact with them across all common browsers and devices.
        I love to code, no matter if it is organized in a big monolith or in tiny micro-frontends. I use
        technologies like <span class="font-bold">HTML5</span>,
        <span class="font-bold">CSS3, SASS and TailwindCSS</span>,
        <span class="font-bold">ES6 and TypeScript</span>,
        <span class="font-bold">Vue.js, nuxt.js, Svelte.js and web components</span>,
        <span class="font-bold">Webpack and RollUp</span> and
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
      <Paragraph isPrimary={false}>
        For me, web design is more than writing code all day long.
        Frameworks are there for organizing our minds, not our code.
        My focus is not only on the
        <span class="font-bold">developer & designer experience (DX)</span>
        but also on the usability of the page for a perfect
        <span class="font-bold">user experience (UX)</span>.
        Therefore I use techniques of the human computer interaction to create
        architectures and <span class="font-bold">user interfaces (UI)</span>.
      </Paragraph>
    </GridItem>
  </Grid>
</WideArticle>
<Spacing></Spacing>
<Spacing></Spacing>
<Spacing></Spacing>
<Header title="about me" />
<div class="bg-gradient-opacity-200" style="clip-path: polygon(20% 0, 100% 0, 80% 100%, 0 100%)">
  <Article>
    <Spacing></Spacing>
    <div class="sm:my-10 my-5 mx-auto border rounded-full w-full max-w-300-px h-300-px bg-center bg-cover shadow-md" style="background-image: url('vannsl.jpg')"></div>

    <p class="text-secondary">
      Hi, nice to meet you!<br /><br />My name is Vanessa. I am a Web
      Developer.<br /><br />
      Currently, I am a Senior Product Engineer at SinnerSchrader. Since 2019 I am
      the Vue Vixens Munich City Coordinator, helping women with their first
      coding and speaking experiences. I am a member of the JS Kongress Program
      Committee 2020.<br /><br />I created my first website at the age of ten.
      Thanks, parents, for growing up in a village without any other children to
      play with but having a computer with DOS/Win95 and internet access. I have
      been passionate about web development ever since. I studied Media
      Informatics with a focus on Human-Computer-Interaction. Now I am striving to
      provide customers with the best experience possible while creating modern
      and accessible web applications.<br /><br />When I write code, I do it not
      for myself but for the next developer.
    </p>
    <Spacing></Spacing>
    <Spacing></Spacing>
  </Article>
</div>