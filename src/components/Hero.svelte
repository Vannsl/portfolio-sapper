<script>
  import { fadeIn, fadeOut } from "../utils/page_fade";
</script>

<style>
  .clipped {
    clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
    background-size: 400% 400%;
    background-position: 50% 0%;
    animation: gradient 6s cubic-bezier(0.17, 0.67, 0.83, 0.67) infinite;
    animation-delay: 2s;
  }

  @keyframes gradient {
    0% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 50% 0%;
    }
  }
</style>

<header class="w-full h-auto">
  <div class="clipped w-full h-screen py-32 px-2 bg-gradient-full text-white">
    <section in:fadeIn out:fadeOut class="text-center">
      <div
        class="mx-auto mb-10 w-auto border-4 border-solid border-white rounded-sm px-4 inline-block"
      >
        <span class="text-5xl uppercase font-bold">
          Who am I
        </span>
      </div>
      <h1 class="mt-10 text-5xl uppercase tracking-widest font-bold">
        Vanessa Otto
      </h1>
      <p>
        <span class="text-2xl tracking-wide">Engineering Manager, Senior Frontend Developer, Public Speaker</span><br />
        <em class="text-2xl">Munich, Germany</em>
      </p>
    </section>
  </div>
</header>
