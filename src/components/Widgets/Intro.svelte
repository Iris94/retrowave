<script>
    import { hud, playIntroOnce } from "../../Store/settings";
    import { fade } from "svelte/transition";
    import { playClickSound } from "$lib/data/sounds.js";

    function neonRide() {
        playClickSound();
        !$hud ? ($hud = !$hud) : null;
        playIntroOnce.set(true);
    }
</script>

{#if !$playIntroOnce}
    <div
        class="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full intro-background"
        transition:fade={{ duration: 1000 }}
    >
        <div class="flex flex-col items-center w-2/3 lg:w-1/2 lg:h-2/3 h-4/5">
            <div class="flex items-center justify-center w-full h-2/5">
                <h1 class="text-5xl text-white">
                    Welcome To <span class="text-primary-accent">Code City</span
                    >
                </h1>
            </div>
            <button on:click={neonRide} class="w-1/2 p-3 font-bold text-white bg-primary-accent">
                Take a drive
            </button>
        </div>
    </div>
{/if}

<style>
    .intro-background {
        background-color: rgba(0, 0, 0, 0.75);
    }
</style>
