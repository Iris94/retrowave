<script>
    import { techStack } from "../../Store/settings";
    import { fade } from "svelte/transition";
</script>

{#if !$techStack}
<div transition:fade={{ duration: 500 }} class="window"></div>
{/if}

<style>
    .window {
        background-color: var(--primary-accent);
        width: 2px;
        height: 2px;
    }

    @media only screen and (max-width: 990px) {
        .window {
            width: 1px;
            height: 1px;
        }
    }
</style>