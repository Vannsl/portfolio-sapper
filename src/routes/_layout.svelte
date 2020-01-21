<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style global>
  @tailwind base;

  /* lato-400 medium */
  @font-face {
    font-family: "Lato";
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: url("../fonts/Lato-Regular.eot"); /* IE9 Compat Modes */
    src: local("Lato Light"), local("Lato-Light"),
      url("../fonts/Lato-Regular.eot?#iefix") format("embedded-opentype"),
      /* IE6-IE8 */ url("../fonts/Lato-Regular.woff2") format("woff2"),
      /* Super Modern Browsers */ url("../fonts/Lato-Regular.woff")
        format("woff"),
      /* Modern Browsers */ url("../fonts/Lato-Regular.ttf")
        format("truetype")
  }
  /* lato-700 bold */
  @font-face {
    font-family: "Lato";
    font-display: swap;
    font-style: normal;
    font-weight: 700;
    src: url("../fonts/Lato-Bold.eot"); /* IE9 Compat Modes */
    src: local("Lato Regular"), local("Lato-Regular"),
      url("../fonts/Lato-Bold.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("../fonts/Lato-Bold.woff2") format("woff2"),
      /* Super Modern Browsers */ url("../fonts/Lato-Bold.woff")
        format("woff"),
      /* Modern Browsers */ url("../fonts/Lato-Bold.ttf")
        format("truetype")
  }

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