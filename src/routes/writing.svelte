<script>
  import { fadeIn, fadeOut } from "../utils/page_fade";
  import Article from "../components/Article.svelte";
  import Header from "../components/Header.svelte";
  import SmallHero from "../components/SmallHero.svelte";
  import List from "../components/List.svelte";
  import SimpleListItem from "../components/SimpleListItem.svelte";
  import OutgoingLink from "../components/OutgoingLink.svelte";
  import Spacing from "../components/Spacing.svelte";

  export let publications = [
    {
      title: "JavaScript: Modernes State Management ohne zusätzliche Library in Vue.js 3",
      src: "https://www.heise.de/hintergrund/JavaScript-Modernes-State-Management-ohne-zusaetzliche-Library-in-Vue-js-3-6304606.html",
      publisher: "heise online",
      date: "11/01/2022",
      emoji: "publications",
    },
    {
      title: "Webpacker, Vue 3, and TypeScript",
      src: "https://dev.to/vannsl/webpacker-vue-3-and-typescript-1i99",
      publisher: "dev.to",
      date: "17/03/2021",
      emoji: "publications",
    },
    {
      title: "Vue3 on Rails",
      src: "https://dev.to/vannsl/vue3-on-rails-l9d",
      publisher: "dev.to",
      date: "11/10/2020",
      emoji: "publications",
    },
    {
      title: "Tips for remote goodbyes",
      src: "https://dev.to/vannsl/tips-for-remote-goodbyes-2o15",
      publisher: "dev.to",
      date: "22/06/2020",
      emoji: "publications",
    },
    {
      title: "Playwright (vs. Puppeteer): Cross-Browser Testing done right",
      src:
        "https://dev.to/vannsl/playwright-vs-puppeteer-cross-browser-testing-done-right-4e3",
      publisher: "dev.to",
      date: "24/05/2020",
      emoji: "publications",
    },
    {
      title:
        "All you need to know to start writing Svelte Single File Components",
      src:
        "https://dev.to/vannsl/all-you-need-to-know-to-start-writing-svelte-single-file-components-cbd",
      publisher: "dev.to",
      date: "17/01/2020",
      emoji: "publications",
    },
    {
      title: "Statically generated website with Svelte and Sapper",
      src:
        "https://dev.to/vannsl/statically-generated-website-with-svelte-and-sapper-5bi7",
      publisher: "dev.to",
      date: "05/01/2020",
      emoji: "publications",
    },
    {
      title: "Why it took me three weeks to implement a Login Form",
      src:
        "https://dev.to/vannsl/why-it-took-me-three-weeks-to-implement-a-login-form-3aa8",
      publisher: "dev.to",
      date: "19/11/2019",
      emoji: "publications",
    },
    {
      title: "E-Mail/Password Authentication with Firebase and Nuxt",
      src:
        "https://dev.to/vannsl/e-mail-password-authentication-with-firebase-and-nuxt-292m",
      publisher: "helpdev",
      date: "19/10/2019",
      emoji: "publications",
    },
    {
      title:
        "Einführung in Vue.js: Was steckt wirklich hinter dem progressiven Framework?",
      src:
        "https://www.hosteurope.de/blog/einfuehrung-in-vue-js-was-steckt-wirklich-hinter-dem-progressiven-framework/",
      publisher: "Host Europe",
      date: "13/05/2019",
      emoji: "publications",
    },
  ];

  export let interviews = [
    {
      title: "Being part of JS Kongress Program Committee",
      src:
        "https://dev.to/s2engineers/being-part-of-js-kongress-program-committee-2mal",
      publisher: "SinnerSchrader Engineers",
      date: "12/03/2020",
      emoji: "interviews",
    },
    {
      title: "New Member for the PC: Vanessa Böhner",
      src:
        "https://medium.com/@jskongress/new-member-for-the-pc-vanessa-b%C3%B6hner-b64bc7ef6f83",
      publisher: "JS Kongress Munich",
      date: "16/09/2019",
      emoji: "interviews",
    },
    {
      title: "Vue.js: A mix of Angular and React with MVVM and Virtual DOM",
      src:
        "https://helpdev.eu/vue-js-a-mix-of-angular-and-react-with-mvvm-and-virtual-dom/",
      publisher: "helpdev",
      date: "29/01/2019 I",
      emoji: "interviews",
    },
    {
      title: "Vue.js: Ein Mix aus Angular und React mit MVVM und Virtual DOM",
      src:
        "https://javascript-days.de/blog/vue-js-ein-mix-aus-angular-und-react-mit-mvvm-und-virtual-dom/",
      publisher: "JS Days",
      date: "29/01/2019 II",
      emoji: "interviews",
    },
  ];
</script>

<svelte:head>
  <title>Vannsl | Writing</title>
</svelte:head>

<main in:fadeIn out:fadeOut>
  <SmallHero segment="writing" type="cover" />
  <Header title="publications" />
  <Spacing />
  <Article>
    <List>
      {#each publications as item (item.date)}
        <SimpleListItem {item} />
      {/each}
    </List>
  </Article>
  <Spacing />
  <Header title="interviews" />
  <Spacing />
  <Article>
    <List type="interviews">
      {#each interviews as item (item.date)}
        <SimpleListItem {item} />
      {/each}
    </List>
  </Article>

  <Spacing />
  <Spacing />
</main>
