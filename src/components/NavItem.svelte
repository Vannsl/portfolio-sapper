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
    background-color: #983349;
    display: block;
    bottom: -1px;
  }
</style>

<li class="block float-left">
  <a class:selected="{selected}" {href} rel="prefetch" class="block py-4 px-2">
    <slot></slot>
  </a>
</li>
