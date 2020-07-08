<script>
  import OutgoingSvg from "./OutgoingSvg.svelte";

  export let href;
  export let color = "text-link dark:text-link-light";
</script>

<a
  {
  href
  }
  target="_blank"
  rel="noopener"
  class="{color} hover:underline"
>
  <slot></slot><OutgoingSvg alt=""></OutgoingSvg
></a>
