<script>
    import { fade } from "svelte/transition";
    import { goto } from "$app/navigation";
    import { personaNeonPage } from "../../Store/settings";
    import { playClickSound } from "$lib/data/sounds.js";

    let driverTransition = false;

    function prepOpenDriver() {
        driverTransition = !driverTransition;
        playClickSound();
    }

    function openDriver() {
        playClickSound();
        $personaNeonPage = !$personaNeonPage;
        goto("/driver");
    }
</script>

<button
    on:click={prepOpenDriver}
    class="car-wrapper"
>
    <div class="car-left-rearview"></div>
    <div class="car-right-rearview"></div>

    <div class="car-top">
        <div class="car-window">
            <div class="car-window-mirror"></div>
        </div>
    </div>

    <div class="car-center">
        <div class="car-lights-wrap">
            <div class="left-lights">
                <div class="car-lights"></div>
                <div class="car-lights"></div>
            </div>

            <div class="car-plate">1312</div>

            <div class="right-lights">
                <div class="car-lights"></div>
                <div class="car-lights"></div>
            </div>
        </div>
    </div>

    <div class="car-bottom"></div>

    <div class="car-wheels">
        <div class="wheels"></div>
        <div class="wheels"></div>
    </div>
</button>

{#if driverTransition}
    <div
        transition:fade={{ duration: 1000 }}
        on:introend={() => openDriver()}
        class="absolute top-0 left-0 z-50 w-screen h-screen bg-black"
    ></div>
{/if}

<style>
    .car-wrapper {
        width: 7%;
        height: 12%;
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 21%;
        justify-content: center;
        left: 46.5%;
        z-index: 45;
    }

    @media only screen and (max-width: 690px) {
        .car-wrapper {
            bottom: 17%;
        }
    }

    .car-left-rearview {
        position: relative;
        width: 10%;
        height: 5%;
        background-color: #000;
        bottom: -20%;
        left: 3%;
        z-index: 100;
    }

    .car-right-rearview {
        position: relative;
        width: 10%;
        height: 5%;
        background-color: #000;
        bottom: -15%;
        left: 87%;
        z-index: 100;
    }

    .car-top {
        width: 100%;
        height: 40%;
        background-color: #0a0813;
        clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
        border-radius: 10% 10% 5% 5%;
        padding: 2%;
        display: flex;
        justify-content: center;
        position: relative;
        top: 1%;
    }

    .car-window {
        clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
        width: 75%;
        height: 50%;
        display: flex;
        justify-content: center;
        background: rgb(5, 28, 44);
        background: linear-gradient(
            0deg,
            rgb(24, 8, 14) 0%,
            rgb(75, 24, 42) 100%
        );
    }

    .car-window-mirror {
        background-color: #000;
        width: 15%;
        height: 20%;
        position: relative;
        top: 5%;
    }

    .car-center {
        width: 100%;
        height: 25%;
        background-color: #0c0916;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .car-lights-wrap {
        width: 99%;
        height: 90%;
        border: #25222d solid 1px;
        border-radius: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5%;
    }

    .left-lights,
    .right-lights {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40%;
    }

    .car-plate {
        width: 25%;
        height: 60%;
        background: var(--tertiary-dark);
        color: var(--primary-accent);
        font-size: xx-small;
        text-align: center;
        border: #16141e solid 0.1vw;
        position: relative;
        top: 70%;
    }

    @media only screen and (max-width: 990px) {
        .car-plate {
            font-size: 5px
        }
    }

    .car-lights {
        width: 7%;
        height: 15%;
        border-radius: 100%;
        background-color: #fff;
        box-shadow:
            0 0 0.1vw 0.2vw #eec3ab,
            0 0 0.2vw 0.3vw #e9566c,
            0 0 0.3vw 0.4vw #a81a42;
    }

    @media only screen and (max-width: 990px) {
        .car-lights {
            box-shadow:
                0 0 1px 2px #eec3ab,
                0 0 2px 3px #e9566c,
                0 0 3px 4px #a81a42;
        }
    }

    .car-bottom {
        width: 100%;
        height: 15%;
        background-color: #05040a;
        border-top: #17151d solid 0.2vw;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: end;
        box-shadow: 0 1.5vw 0.2vw 0.4vw #060606;
    }

    .car-wheels {
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: space-between;
    }

    .wheels {
        width: 15%;
        height: 100%;
        background: #000;
    }
</style>
