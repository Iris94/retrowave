<script>
    import Sun from "./Sun.svelte";
    import Cityline from "./Cityline.svelte";
    import Wavelines from "../Shared/Wavelines.svelte";
  
    const wavelines = Array.from({ length: 15 }, (_, index) => index);
  </script>
  
  <div class="relative flex items-end justify-center w-full h-1/3">
    <div class="absolute top-0 left-0 flex flex-col w-full h-full gap-4">
      {#each wavelines as index}
        <Wavelines />
      {/each}
    </div>
  
    <Cityline />
    <Sun />
  </div>
  