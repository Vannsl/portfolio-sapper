<script>
  export let href;
  export let id;
  export let d;
  export let viewBox;
</script>

<li class="m-1 text-white">
  <a
    {href}
    aria-label="Open Vannsl's {id} page"
    class="p-2"
    target="_blank"
    rel="nofollow, noreferrer, noopener"
  >
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="{id}"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
     {viewBox}
      class="inline-block w-6 h-6"
    >
      <path fill="currentColor" {d} />
    </svg>
  </a>
</li>
