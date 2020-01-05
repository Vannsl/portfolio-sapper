<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  * {
    font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer/>