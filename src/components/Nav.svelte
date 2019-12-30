<script>
  import NavItem from "./NavItem.svelte";
  export let segment;
</script>

<nav class="border border-primary-transparent px-1 text-primary">
  <ul class="m-0 p-0 clearfix">
    <NavItem selected={segment === undefined} href=".">
      home
    </NavItem>
    <NavItem selected={segment === "about"} href="about">
      about
    </NavItem>
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
