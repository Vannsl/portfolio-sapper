<script>
  export let segment;
  export let extension = "jpg";
  export let type;
  export let background =
    type === "contain"
      ? "sm-only:bg-center bg-contain bg-fixed"
      : "sm:bg-top bg-center bg-cover sm:bg-fixed";
</script>

<section
  class="w-full p-10 sm:p-16 md:p-32 lg:p-40 xl:p-64 {background}"
  style="background-image: url('vannsl-{ segment }.{extension}')"
></section>
