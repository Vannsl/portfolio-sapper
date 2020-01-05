<style>
  .clipped {
    clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
    background-size: 400% 400%;
    animation: gradientBG 6s cubic-bezier(0.17, 0.67, 0.83, 0.67) infinite;
  }

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .text-transition {
    animation: fade 1s;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<header class="w-full h-auto">
  <div
    class="clipped w-full h-screen py-32 px-2 bg-gradient-secondary-primary-secondary-tertiary text-white"
  >
    <section class="text-transition text-center">
      <div
        class="mx-auto mb-10 w-auto border-4 border-solid border-white rounded-sm px-4 inline-block"
      >
        <span class="text-5xl uppercase">
          Who am I
        </span>
      </div>
      <h1 class="mt-10 text-5xl uppercase tracking-widest">Vanessa Böhner</h1>
      <p>
        <span class="text-4xl tracking-wider">frontend developer</span><br />
        <em class="text-4xl">munich, germany</em>
      </p>
    </section>
  </div>
</header>
