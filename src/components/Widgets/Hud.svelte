<script>
    import { radio, voice, hud } from "../../Store/settings";
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";
    import Radioplayer from "./Radioplayer.svelte";
    import Voiceplayer from "./Voiceplayer.svelte";

    let song;
    let artist;

    onMount(() => {
        const eventSource = new EventSource("https://nightride.fm/meta");

        eventSource.onmessage = function (event) {
            if (event.data == "keepalive") return;

            const data = JSON.parse(event.data);
            const nightrideData = data.find((d) => d.station === "nightride");

            if (nightrideData) {
                song = nightrideData.title;
                artist = nightrideData.artist.toLowerCase();
            }
        };
    });
</script>

{#if $hud}
    <Radioplayer />
    <Voiceplayer />
    <div
        class="absolute bottom-0 right-0 z-50 flex flex-col items-end justify-end mt-1 lg:w-1/3 lg:mt-3 h-1/6"
    >
        <button
            class="flex items-center gap-2 pr-3 cursor-pointer lg:gap-5 h-1/3"
            class:text-light-neon={$voice}
            class:text-primary-accent={!$voice}
            on:click={() => ($voice = !$voice)}
        >
            <p class="text-xs lg:text-base">voice</p>

            {#if $voice}
                <Icon
                    icon="game-icons:sound-on"
                    class="relative lg:text-3xl lg:bottom-1"
                />
            {:else}
                <Icon
                    icon="game-icons:sound-off"
                    class="relative lg:text-3xl lg:bottom-1"
                />
            {/if}
        </button>

        <button
            class="flex items-center w-full gap-5 pr-3 cursor-pointer lg:mr-0 lg:gap-6 h-1/3 lg:w-fit bg-tertiary-dark"
            class:text-light-neon={$radio}
            class:bg-transparent={!$radio}
            on:click={() => ($radio = !$radio)}
        >
            <div class="flex w-full pl-2">
                <p
                    class="flex text-xs wrap full overflow-ellipsis whitespace-nowrap lg:text-base"
                >
                    <span
                        class:text-transparent={!$radio}
                        class="flex mr-2 font-bold text-primary-accent"
                        ><h6>{song}</h6></span
                    >
                    <span class:text-transparent={!$radio}>|</span>
                    <span
                        class:text-transparent={!$radio}
                        class="ml-2 text-secondary-warm">{artist}</span
                    >
                </p>
            </div>

            <div
                class="flex items-center justify-end w-1/2 gap-5"
                class:text-primary-accent={!$radio}
            >
                <p class="text-xs lg:text-base">radio</p>
                {#if $radio}
                    <Icon
                        icon="fluent:radio-button-24-filled"
                        class="lg:text-2xl"
                    />
                {:else}
                    <Icon
                        icon="fluent:radio-button-24-regular"
                        class="lg:text-2xl"
                    />
                {/if}
            </div>
        </button>
    </div>
{/if}
