<script>
    import { techStack, asyncHackText, activeVoiceAudio } from "../../Store/settings";
    import { playClickSound, startHacking } from "$lib/data/sounds.js";

    let hacked = false

    function prepHacking() {
        const audioElement = document.querySelector('#voicePlayer');

        if (audioElement && !audioElement.paused) {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
        
        if (!hacked) {
            activeVoiceAudio.set(null)
            startHacking();
            hacked = !hacked
        }
        
        playClickSound();
        $techStack = !$techStack;
        asyncHackText.set(true)
    }
</script>

<button
    on:click={prepHacking}
    class:infiltrate={$techStack}
    class="flex flex-col items-start justify-start px-5 py-2 text-lg cursor-pointer h-fit lg:h-32 lg:px-9 hack-screen text-light-neon"
>
    <span class="-mt-2 -mb-3 lg:mb-0 lg:mt-0">h</span>
    <span class="-mb-3 lg:mb-0">a</span>
    <span class="-mb-3 lg:mb-0">c</span>
    <span class="-mb-3 lg:mb-0">k</span>

</button>

<style>
    .infiltrate {
        animation: infiltration 1.5s forwards;
    }

    @keyframes infiltration {
        100% {
            box-shadow:
                inset -2px 2px 0.5vw 0.1vw var(--primary-accent),
                0 0 0.5vw 0.1vw var(--primary-accent);
            color: var(--primary-accent);
        }
    }

    .hack-screen {
        background-color: var(--car-dash);
        position: absolute;
        bottom: 50%;
        left: 25vw;
        filter: blur(0.5px);
        box-shadow:
            inset -2px 2px 0.5vw 0.1vw var(--light-neon),
            0 0 0.5vw 0.1vw var(--dark-neon);
    }

    @media only screen and (max-width: 990px) {
        .hack-screen {
            font-size: 12px;
        }
    }
</style>
