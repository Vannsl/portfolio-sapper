<script>
  import OutgoingSvg from "./OutgoingSvg.svelte";

  export let href;
  export let color = "text-link";
</script>

<a
  {
  href
  }
  target="_blank"
  rel="nofollor, noreferrer, noopener"
  class="{color} hover:underline"
>
  <slot></slot><OutgoingSvg alt=""></OutgoingSvg
></a>
