<script>
  import GridItem from "./GridItem.svelte";
</script>

<section class="flex flex-wrap mb-4 text-center">
  <GridItem>
    <slot name="left"></slot>
  </GridItem>
  <GridItem>
    <slot name="right"></slot>
  </GridItem>
</section>
