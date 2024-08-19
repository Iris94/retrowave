<script>
    import { techStack, asyncHackText } from "../../Store/settings";
    import { playClickSound, startHacking } from "$lib/data/sounds.js";

    let hacked = false

    function prepHacking() {
        if (!hacked) {
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
    class="flex flex-col items-start justify-start h-32 py-2 text-lg cursor-pointer px-9 hack-screen text-light-neon"
>
    h <br /> a <br /> c <br /> k
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
</style>
