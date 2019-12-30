<script>
  let isPrimary = false;
  export let fontColor = isPrimary ? "text-primary" : "text-secondary";
</script>

<p class="{fontColor} md:text-center text-left font-normal">
  <slot></slot>
</p>
