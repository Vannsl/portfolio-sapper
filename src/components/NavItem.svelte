<script>
  export let selected;
  export let href;
</script>

<style>
  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: hsl(336.3, 78%, 42.8%);
    display: block;
    bottom: -1px;
  }
</style>

<li class="block float-left">
  <a
    class:selected="{selected}"
    {href}
    rel="prefetch"
    class="block py-4 px-2 hover:bg-tertiary-opacity-200 hover:cursor-pointer"
  >
    <slot></slot>
  </a>
</li>
