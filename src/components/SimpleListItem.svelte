<script>
  import OutgoingLink from "./OutgoingLink.svelte";

  export let item = {};
</script>

<li>
  <OutgoingLink href="{ item.src }">{ item.title }</OutgoingLink>,
  <span class="font-light"
    >{ item.publisher }{#if item.episode }, { item.episode }{/if}</span
  >
  <p class="font-light">{ item.date }</p>
</li>
