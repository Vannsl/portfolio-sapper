<script>
  import OutgoingSvg from "./OutgoingSvg.svelte";

  export let href;
</script>

<a
  {
  href
  }
  target="_blank"
  rel="nofollor, noreferrer, noopener"
  class="font-light text-tertiary hover:underline"
>
  <slot></slot><OutgoingSvg alt=""></OutgoingSvg
></a>
