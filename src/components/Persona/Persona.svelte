<script>
    import Visage from "./Visage.svelte";
    import Datacore from "./Datacore.svelte";
    import { hud, personaNeonPage, techStack } from "../../Store/settings";
    import { fade } from "svelte/transition";
</script>

{#if $hud}
    <div
        class="absolute z-50 flex flex-col w-5/12 m-2 md:w-2/5 lg:m-5 h-fit"
        transition:fade={{ duration: 250 }}
    >
        {#if !$techStack}
            <Visage />
        {/if}

        {#if $personaNeonPage}
            <Datacore />
        {/if}
    </div>
{/if}
