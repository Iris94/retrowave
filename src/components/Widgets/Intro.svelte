<script>
    import { hud, playIntroOnce } from "../../Store/settings";
    import { fade } from "svelte/transition";
    import { playClickSound } from "$lib/data/sounds.js";

    function neonRide() {
        playClickSound();
        !$hud ? ($hud = !$hud) : null;
        playIntroOnce.set(true);

        if (isMobileDevice()) {
            enterFullscreen();
        }
    }

    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    function enterFullscreen() {
        const docEl = document.documentElement;

        if (docEl.requestFullscreen) {
            docEl.requestFullscreen().catch(err => {
                console.error("Error entering fullscreen:", err);
            });
        } else if (docEl.mozRequestFullScreen) { // Firefox
            docEl.mozRequestFullScreen().catch(err => {
                console.error("Error entering fullscreen:", err);
            });
        } else if (docEl.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            docEl.webkitRequestFullscreen().catch(err => {
                console.error("Error entering fullscreen:", err);
            });
        } else if (docEl.msRequestFullscreen) { // IE/Edge
            docEl.msRequestFullscreen().catch(err => {
                console.error("Error entering fullscreen:", err);
            });
        }
    }
</script>

{#if !$playIntroOnce}
    <div
        class="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full intro-background"
        transition:fade={{ duration: 1000 }}
    >
        <div class="flex flex-col items-center w-2/3 lg:w-1/2 lg:h-2/3 h-4/5">
            <div class="flex items-center justify-center w-full h-2/5">
                <h1 class="text-white md:text-2xl lg:text-5xl">
                    Welcome To <span class="text-primary-accent">Code City</span>
                </h1>
            </div>
            <button on:click={neonRide} class="w-1/3 p-px mb-10 text-sm font-bold text-white lg:mb-20 md:text-base md:p-2 lg:w-1/2 lg:p-3 bg-primary-accent">
                Take a drive
            </button>
            <p class="text-center text-white lg:text-base">
                This website starts with music and sound turned ON. To turn them off, simply click on 'Radio' or 'Voice' in the bottom left corner.
            </p>
        </div>
    </div>
{/if}

<style>
    .intro-background {
        background-color: rgba(0, 0, 0, 0.75);
    }
</style>
