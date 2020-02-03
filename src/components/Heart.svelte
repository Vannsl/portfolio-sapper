<script>
  import Tile from "./Tile.svelte";

  const translates = [
    "-60px, 0", "-40px, 0", "40px, 0", "60px, 0",
    "-80px, 20px", "-60px, 20px", "-40px, 20px", "-20px, 20px", "20px, 20px", "40px, 20px", "60px, 20px", "80px, 20px",
    "-100px, 40px", "-80px, 40px", "-60px, 40px", "-40px, 40px", "-20px, 40px", "0, 40px", "20px, 40px", "40px, 40px", "60px, 40px", "80px, 40px", "100px, 40px",
    "-100px, 60px", "-80px, 60px", "-60px, 60px", "-40px, 60px", "-20px, 60px", "0, 60px", "20px, 60px", "40px, 60px", "60px, 60px", "80px, 60px", "100px, 60px", 
    "-80px, 80px", "-60px, 80px", "-40px, 80px", "-20px, 80px", "0, 80px", "20px, 80px", "40px, 80px", "60px, 80px", "80px, 80px",
    "-60px, 100px", "-40px, 100px", "-20px, 100px", "0, 100px", "20px, 100px", "40px, 100px", "60px, 100px",
    "-40px, 120px", "-20px, 120px", "0, 120px", "20px, 120px", "40px, 120px",
    "-20px, 140px", "0, 140px", "20px, 140px",
    "0, 160px"
  ]
</script>

{#each Array(59) as _, i}
  <Tile translate="{translates[i]}" />
{/each}
