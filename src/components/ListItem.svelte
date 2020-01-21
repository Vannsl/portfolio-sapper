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

  .mentoring:before {
    content: "👩‍🏫";
  }

  .austria:before {
    content: "🇦🇹";
  }

  .czech-republic:before {
    content: "🇨🇿";
  }

  .germany:before {
    content: "🇩🇪";
  }

  .united-kingdom:before {
    content: "🇬🇧";
  }
</style>

<li class="{ item.emoji }">
  <span class="font-bold">{ item.title }</span>

  {#if item.eventSrc && item.event }<OutgoingLink href="{item.eventSrc}"
    >{item.event}</OutgoingLink
  >
  {/if} {#if item.videoSrc || item.slidesSrc || item.codebases }
  <p>
    {#if item.videoSrc }
    <OutgoingLink href="{item.videoSrc}">Video</OutgoingLink>
    {/if} {#if item.slidesSrc }
    <OutgoingLink href="{item.slidesSrc}">Slides</OutgoingLink>
    {/if} {#if item.codebases }{#each item.codebases as codebase, i
    (codebase.src)}
    <OutgoingLink href="{codebase.src}">Codebase { i + 1 }</OutgoingLink>
    {/each}{/if}
  </p>
  {/if}
  <p>
    { item.date }, { item.location }
  </p>
</li>
