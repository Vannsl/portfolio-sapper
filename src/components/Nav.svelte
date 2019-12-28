<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid #98334933;
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #983349;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a class:selected="{segment === undefined}" href="." rel="prefetch"
        >home</a
      >
    </li>
    <li>
      <a class:selected='{segment === "about"}' href="about" rel="prefetch"
        >about</a
      >
    </li>
    <li>
      <a
        class:selected='{segment === "speaking"}'
        href="speaking"
        rel="prefetch"
        >speaking</a
      >
    </li>
    <li>
      <a class:selected='{segment === "writing"}' href="writing" rel="prefetch"
        >writing</a
      >
    </li>
    <li>
      <a
        class:selected='{segment === "projects"}'
        href="projects"
        rel="prefetch"
        >projects</a
      >
    </li>
  </ul>
</nav>
