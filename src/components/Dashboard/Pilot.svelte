<script>
    import { onMount } from 'svelte';

    let kmh = 50;
    let rpm = 900;
    let gear = 1;

    function updateClock() {
        if (gear == 6) {
        kmh = Math.floor(Math.random() * (300 - 290 + 1)) + 290;
        rpm = Math.floor(Math.random() * (2300 - 2100 + 1)) + 2100;
        return;
    }

        if (kmh < 300) {
            kmh += Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        }

        if (rpm < 3000) {
            rpm += Math.floor(Math.random() * (150 - 100 + 1)) + 100;
        } else {
            rpm = 1500;
            if (gear < 6) {
                gear += 1;
            }
        }
    }

    onMount(() => {
        const interval = setInterval(() => {
            updateClock();
        }, 150);

        return () => clearInterval(interval);
    });
</script>

<div class="relative flex flex-col w-2/5 h-full">
    
    <div class="flex w-full h-1/2 wheel-wrap">
        <div class="w-1/4 h-full"></div>

        <div class="relative w-3/4 h-full">
            <div
                class="absolute left-0 flex items-center justify-center w-full h-full p-1 speedometer top-2"
            >
                <div
                    class="flex items-center w-4/6 p-1 speedometer-inside h-4/5 justify-evenly"
                >
                    <div class="clock">{kmh}</div>
                    <div class="clock">{rpm}</div>
                    <div class="clock">{gear}</div>
                </div>
            </div>
        </div>
    </div>

    <div class="relative w-full h-1/2">
        <div class="absolute flex items-center justify-center wheel">
            <div class="w-1/3 wheel-hook"></div>
            <div class="w-1/3 h-1/6 wheel-press"></div>
            <div class="w-1/3 wheel-hook"></div>
        </div>
    </div>
</div>

<style>
    .speedometer {
        clip-path: polygon(
            10% 0%,
            90% 0%,
            100% 35%,
            100% 65%,
            90% 100%,
            10% 100%,
            0% 65%,
            0% 35%
        );
        background-color: var(--car-dark);
    }

    .speedometer-inside {
        border-radius: 25% 25% 10% 10%;
        box-shadow:
            inset -3px 3px 0.7vw 0.1vw var(--dark-neon),
            0 0 0.5vw 0.1vw var(--light-neon);
    }

    .clock {
        border-radius: 50%;
        width: 20%;
        height: 90%;
        background-color: var(--car-dash);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--light-neon);
        font-size: 0.9vw;
        box-shadow: inset 0 0 0.5vw 0.15vw var(--light-neon);
    }

    @media only screen and (max-width: 990px) {
        .clock {
            width: 15%;
            height: 80%
        }
    }

    .wheel {
        border-radius: 50%;
        width: 25vw;
        height: 25vw;
        border: 1vw var(--car-dash) solid;
        background-color: transparent;
        position: absolute;
        top: -150%;
        left: 25%;
        box-shadow: 1px -1px 0.5px 1px var(--primary-accent);
        transform: rotate(-5deg);
        animation: wheel 10s infinite;
    }

    .wheel-press {
        background-color: var(--car-dash);
        border-radius: 30% 30% 25% 25%;
        box-shadow: 0.5px -1px 0.25px 0.5px var(--primary-accent);
    }

    .wheel-hook {
        background-color: var(--car-dash);
        height: 3%;
        box-shadow: 0.5px -0.5px 0.3px 0.6px var(--primary-accent);
    }
</style>
