<script>
  import OutgoingLink from "./OutgoingLink.svelte";

  export let item = {};
</script>

<style>
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
    padding-left: 36px;
    margin-bottom: 20px;
  }

  li:before {
    display: block;
    position: absolute;
    top: 2px;
    left: 0;
    content: "";
    font-size: 1.2em;
  }

  .podcast:before {
    content: "🎧";
  }

  .interviews:before {
    content: "📰";
  }

  .videointerviews:before {
    content: "🎥";
  }

  .publications:before {
    content: "📚";
  }
</style>

<li class="{ item.emoji }">
  <OutgoingLink href="{ item.src }">{ item.title }</OutgoingLink>, {
  item.publisher }{#if item.episode }, { item.episode }{/if}
  <p>
    { item.date }
  </p>
</li>
