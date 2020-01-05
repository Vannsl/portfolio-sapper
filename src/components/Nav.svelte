<script>
  import NavItem from "./NavItem.svelte";
  export let segment;
</script>

<nav class="flex sm:justify-between border border-tertiaryopacity-200 text-primary sm:uppercase tracking-wider">
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
    <NavItem selected={segment === "projects"} href="projects">
      projects
    </NavItem>
  </ul>
</nav>
