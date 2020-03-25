<script>
  import { fadeIn, fadeOut } from "../utils/page_fade";
  import Hero from '../components/Hero.svelte';
  import Knowledge from "../components/Knowledge.svelte";
  import AboutMe from "../components/AboutMe.svelte";
  import OpenSource from '../components/OpenSource.svelte';
  import Spacing from '../components/Spacing.svelte';
</script>

<svelte:head>
  <title>Vannsl | Web Developer</title>
</svelte:head>

<main in:fadeIn out:fadeOut></main>
<Hero/>
<Spacing/>
<Knowledge/>
<Spacing/>
<Spacing/>
<Spacing/>
<AboutMe/>
<Spacing/>
<Spacing/>
<Spacing/>
<OpenSource/>
