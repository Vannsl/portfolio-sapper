<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;


  @responsive {
    .clipped-10 {
      clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%)
    }

    .clipped-20 {
      clip-path: polygon(20% 0, 100% 0, 80% 100%, 0 100%)
    }
  }

  * {
    font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer/>