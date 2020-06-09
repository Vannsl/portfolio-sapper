<script>
  import { onMount } from 'svelte';
  import Moon from '../svg/moon.svelte';
  import Sun from '../svg/sun.svelte';

  export let segment;
  const items = ["speaking", "writing"];
  const itemClasses = "block float-left";
  const listClasses = "m-0 p-0 clearfix";
  const linkClasses = "block py-4 px-2 hover:cursor-pointer";
  let y;

  let darkMode;
  let isLoading = true;
  const modeDark = "mode-dark";

  onMount(() => {
    darkMode = document.documentElement.classList.value === modeDark;
    isLoading = false;
  });

  function toggleMode() {
    if (!darkMode) {
      document.documentElement.classList.add(modeDark);
    } else {
      document.documentElement.classList.remove(modeDark);
    }
    darkMode = !darkMode;
  }
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
    background-color:white;
    display: block;
    bottom: -1px;
  }

  .fixed .selected::after {
    background-color: hsl(336.3, 78%, 42.8%);
  }

  .trans {
    transition: padding .5s, font-size .5s;
  }

  .moon {
    mask: url(moon.svg) no-repeat center;
  }

  .sun {
    mask: url(sun.svg) no-repeat center;
  }
</style>

<svelte:window bind:scrollY={y} />

<nav class="{y > 8 ? 'fixed shadow-lg' : 'absolute mt-2'} w-full z-10 uppercase tracking-wider text-sm sm:text-base">
  <div class="p-1 text-sm text-center bg-dark text-white">
    #blacklivesmatter
  </div>
  <div class="{y > 8 ? 'bg-white dark:bg-dark text-tertiary dark:text-tertiary-light' : 'text-white p-2 sm:px-8 sm:py-4 sm:text-lg'} trans p-0 flex justify-between {y > 8 || segment === undefined || segment === 'imprint' ? '' : 'bg-dark bg-opacity-75 sm:bg-opacity-0'}">
    <ul class="{listClasses}">
      <li class="{itemClasses} md:ml-2">
        <a
          class:selected={segment === undefined}
          href="."
          rel="prefetch"
          class={linkClasses}
        >
          vannsl
        </a>
      </li>
    </ul>

    <ul class={listClasses}>
      {#each items as item}
        <li class={itemClasses}>
          <a
            class:selected={segment === item}
            href={item}
            rel="prefetch"
            class={linkClasses}
          >
            {item}
          </a>
        </li>
      {/each}
      <li class={itemClasses}>
        <button
          aria-label="Activate dark mode"
          class:invisible={isLoading}
          class="mt-4 mx-2 sm:mx-4 w-5 sm:w-6 cursor-pointer opacity-50 hover:opacity-100"
          on:click={toggleMode}
        >
          {#if darkMode}
            <Sun></Sun>
          {:else}
            <Moon></Moon>
          {/if}
        </button>
      </li>
    </ul>
  </div>
</nav>
