<script>
  import OutgoingLink from "./OutgoingLink.svelte";

  export let item = {};
</script>

<li>
  <OutgoingLink href="{ item.src }">{ item.title }</OutgoingLink>, {
  item.publisher }{#if item.episode }, { item.episode }{/if}
  <p>
    { item.date }
  </p>
</li>
