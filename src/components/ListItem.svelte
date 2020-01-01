<script>
  import OutgoingLink from "./OutgoingLink.svelte";

  export let item = {};
</script>

<li class="{ item.country }">
  <span class="font-bold">{ item.title }</span>
  <p>
    {#if item.eventSrc && item.event }<OutgoingLink href="{item.eventSrc}"
      >{item.event}</OutgoingLink
    >
    {/if}{ item.location }
  </p>
  {#if item.videoSrc || item.slidesSrc || item.codebases }
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
    { item.date }
  </p>
</li>
