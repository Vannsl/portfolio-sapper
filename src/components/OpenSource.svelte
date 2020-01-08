<script>
  import OutgoingLink from "./OutgoingLink.svelte";
</script>

<style></style>

<div class="relative w-full h-auto">
  <div class="w-full h-screen py-48 px-10 bg-secondary text-white">
    <section class="text-center">
      <p class="relative sm:text-3xl text-xl tracking-wider z-10">
        <strong>The code of this web page is open source.</strong><br />
        Feel free to use it.
        <br /><br />
        <OutgoingLink
          color="white"
          href="https://github.com/Vannsl/portfolio-sapper"
        >
          Open GitHub Repository
        </OutgoingLink>
      </p>
    </section>
  </div>
</div>
