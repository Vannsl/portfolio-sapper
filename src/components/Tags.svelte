<script>
  import Tag from "./Tag.svelte";

  export let labels;
</script>

<div class="flex justify-center flex-wrap relative z-10">
  {#each labels as label}
    <Tag {label} />
  {/each}
</div>