<script>
    import { goto } from "$app/navigation";
    import { fade } from "svelte/transition";
    import Infiltration from "./Infiltration.svelte";
    import { playClickSound } from "$lib/data/sounds.js";

    let terminalTransition = false;

    function prepOpenTerminal() {
        const audioElement = document.querySelector("#voicePlayer");

        if (audioElement && !audioElement.paused) {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
        playClickSound();
        terminalTransition = !terminalTransition;
    }

    function openTerminal() {
        goto("/terminal");
    }
</script>

<div class="flex flex-col w-1/5 h-full">
    <div class="relative flex items-center justify-center w-full h-1/2">
        <button
            on:click={prepOpenTerminal}
            class="w-3/4 h-full cursor-pointer sm:text-xs lg:text-xl lcd-screen text-light-neon"
        >
            Open Projects
        </button>

        <Infiltration />
    </div>

    <div
        class="flex flex-col items-center justify-start w-full gap-1 lg:gap-5 h-1/2"
    >
        <div class="flex w-1/2 gap-1 h-1/5">
            <div class="w-1/5 h-full bg-primary-accent red-shade"></div>
            <div class="w-1/5 h-full bg-primary-accent red-shade"></div>
            <div class="w-1/5 h-full bg-primary-accent red-shade"></div>
            <div class="w-1/5 h-full bg-primary-accent red-shade"></div>
            <div class="w-1/5 h-full bg-primary-accent red-shade"></div>
        </div>

        <div class="flex w-1/2 gap-1 p-1 lg:p-3 h-2/5">
            <div class="w-1/5 h-full bg-secondary-warm orange-shade"></div>
            <div class="w-1/5 h-full bg-secondary-warm orange-shade"></div>
            <div class="w-1/5 h-full bg-secondary-warm orange-shade"></div>
            <div class="w-1/5 h-full bg-secondary-warm orange-shade"></div>
            <div class="w-1/5 h-full bg-secondary-warm orange-shade"></div>
        </div>
    </div>
</div>

{#if terminalTransition}
    <div
        class="absolute top-0 w-screen h-screen bg-darker-neon transition-div"
        transition:fade={{ duration: 500 }}
        on:introend={() => openTerminal()}
    ></div>
{/if}

<style>
    .lcd-screen {
        background-color: var(--car-dash);
        position: relative;
        bottom: 30%;
        box-shadow:
            inset -2px 2px 2vw 0.25vw var(--light-neon),
            0 0 0.5vw 0.1vw var(--dark-neon);
        filter: blur(0.5px);
        animation: blink 5s infinite;
    }

    .red-shade {
        box-shadow: 0 0 0.9vw 0.1vw var(--primary-accent);
    }

    .orange-shade {
        box-shadow: 0 0 0.9vw 0.1vw var(--secondary-warm);
    }
</style>
