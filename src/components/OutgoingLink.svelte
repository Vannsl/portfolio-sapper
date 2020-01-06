<script>
  import OutgoingSvg from "./OutgoingSvg.svelte";

  export let href;
  export let color = "tertiary";
</script>

<a
  {
  href
  }
  target="_blank"
  rel="nofollor, noreferrer, noopener"
  class="text-{color} hover:underline"
>
  <slot></slot><OutgoingSvg alt=""></OutgoingSvg
></a>
