<script>
    import { techStack } from "../../Store/settings";
    import { fade } from "svelte/transition";
</script>

{#if !$techStack}
<div transition:fade={{ duration: 500 }} class="z-10 self-center w-11/12 h-px bg-primary-dark"></div>
{/if}