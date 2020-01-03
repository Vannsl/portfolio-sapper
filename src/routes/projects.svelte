<script>
  import Grid from "../components/Grid.svelte";
  import GridItem from "../components/GridItem.svelte";
  import SmallHero from "../components/SmallHero.svelte";
</script>

<svelte:head>
  <title>Vannsl Projects</title>
</svelte:head>

<SmallHero segment="projects" extension="png" type="contain"  />

<Grid>
  <GridItem>
    Hello
  </GridItem>
  <GridItem>
    World
  </GridItem>
</Grid>

<Spacing></Spacing>
<Spacing></Spacing>
