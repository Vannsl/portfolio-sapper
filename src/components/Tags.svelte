<script>
  import Tag from "./Tag.svelte";

  export let labels;
</script>

<div class="flex justify-center flex-wrap relative">
  {#each labels as label}
    <Tag {label} />
  {/each}
</div>