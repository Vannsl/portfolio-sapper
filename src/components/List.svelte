<script>
  export let type = "";
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

<ul class="{type} listing text-tertiary">
  <slot></slot>
</ul>
