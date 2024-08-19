<script>
    import { afterUpdate } from "svelte";
    import { driveMode, laneAnimation } from "../../Store/settings";

    afterUpdate(() => {
        if ($driveMode) {
            setTimeout(() => {
                $laneAnimation = true;
            }, 50);
        }
    });
</script>

<div class="net-road">
    <div class="left-lane">
        {#each Array(5) as _, i}
            <div
                class="lane-track"
                class:lane-track-animation={$laneAnimation}
            ></div>
        {/each}
    </div>
    <div class="right-lane">
        {#each Array(5) as _, i}
            <div
                class="lane-track"
                class:lane-track-animation={$laneAnimation}
            ></div>
        {/each}
    </div>
</div>

<style>
    @keyframes moveTrack {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(100%);
        }
    }
    .net-road {
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        align-items: end;
        bottom: 0;
        left: 50%;
        width: 25%;
        height: 100%;
        background: rgb(5, 28, 44);
        background: linear-gradient(
            0deg,
            rgba(5, 28, 44, 1) 0%,
            rgba(224, 69, 123, 1) 100%
        );
        transform: translateX(-50%) rotateX(75deg);
        border-right: var(--secondary-cool) 5px solid;
        border-left: var(--secondary-cool) 5px solid;
        box-shadow: inset 0 -2vw 5vw 3vw var(--tertiary-dark);
    }

    .left-lane,
    .right-lane {
        width: 10%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        overflow: hidden;
    }

    .lane-track {
        width: 5%;
        height: 10%;
        background-color: #ffffff99;
        will-change: transform;
    }

    .lane-track-animation {
        animation: moveTrack 300ms linear infinite;
    }

    @media (max-width: 768px) {
        .net-road {
            width: 50%;
            transform: translateX(-50%) rotateX(60deg);
        }
    }
</style>
