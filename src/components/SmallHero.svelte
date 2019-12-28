<script>
  export let segment;
  export let type;
  export let background =
    type === "contain" ? "sm-only:bg-center bg-contain" : "bg-top bg-cover";
</script>

<section
  class="w-full p-10 sm:p-16 md:p-32 lg:p-40 xl:p-64 bg-fixed {background}"
  style="background-image: url('vannsl-{ segment }.jpg')"
></section>
