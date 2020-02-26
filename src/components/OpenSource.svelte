<script>
  import OutgoingLink from "./OutgoingLink.svelte";
  import Heart from "./Heart.svelte";
</script>

<style></style>

<div class="relative w-full h-auto">
  <div class="w-full h-screen pt-48 px-10 bg-secondary text-dark">
    <section class="sm:mb-14 mb-10 text-center">
      <p class="relative sm:text-3xl text-xl tracking-wider z-10">
        <strong>The code of this web page is open source.</strong><br />
        Feel free to use it.
        <br /><br />
        <OutgoingLink
          color="text-dark"
          href="https://github.com/Vannsl/portfolio-sapper"
        >
          Open GitHub Repository
        </OutgoingLink>
      </p>
      <p>
        This web site does not load a single tracking library. You can click on
        the link.
      </p>
    </section>
    <div class="absolute inset-x-1/2">
      <Heart />
    </div>
  </div>
</div>
