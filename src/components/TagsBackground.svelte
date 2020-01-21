<script>
  import SecondaryBox from "./SecondaryBox.svelte";

  const translates = [
    "-20px, 0", "0, 0", "20px, 0",
    "0, 20px", "20px, 20px",
    "0, 40px", "20px, 40px",
    "-20px, 60px", "0, 60px", "20px, 60px", "40px, 60px",
    "-20px, 80px", "0, 80px", "20px, 80px", "40px, 80px",
    "-20px, 100px", "0, 100px", "20px, 100px",
    "-20px, 120px", "0, 120px",
    "-20px, 140px"

  ]
</script>

<div class="absolute right-0 bottom-1/2">
  {#each Array(60) as _, i}
    <SecondaryBox translate="{translates[i]}" />
  {/each}
</div>
