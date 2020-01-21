<script>
  import NavItem from "./NavItem.svelte";
  export let segment;
</script>

<nav class="flex justify-between border border-tertiary-opacity-200 text-tertiary uppercase tracking-wider">
  <ul class="m-0 p-0 clearfix">
    <NavItem selected={segment === undefined} href=".">
      vannsl
    </NavItem>
  </ul>

  <ul class="m-0 p-0 clearfix">
    <NavItem selected={segment === "speaking"} href="speaking">
      speaking
    </NavItem>
    <NavItem selected={segment === "writing"} href="writing">
      writing
    </NavItem>
  </ul>
</nav>
