<script>
    import { fade } from "svelte/transition";
    import { goto } from "$app/navigation";
    import Contact from "./Contact.svelte";
    import Projects from "./Projects.svelte";
    import Binary from "../../components/Widgets/Binary.svelte";
    import { terminalDefault } from "../../Store/settings";
    import { playClickSound, startTerminal } from "$lib/data/sounds.js";
    import { onMount } from "svelte";

    let terminalPreAnimation = true;

    onMount(() => {
        startTerminal();
    })

    function backToDriver() {
        playClickSound();
        goto("/driver");
    }
</script>

<svelte:head>
    <title>Terminal</title>
</svelte:head>

<div
    class="absolute z-40 flex flex-col items-center justify-center w-full h-full terminal"
>
    {#if terminalPreAnimation}
        <Binary
            color="var(--light-neon)"
            on:animationend={() => (terminalPreAnimation = false)}
        />
    {:else}
        <div
            transition:fade={{ duration: 500 }}
            class="flex w-full h-1/5 text-light-neon"
        >
            <div class="flex items-center justify-center w-1/3">
                <button
                    on:click={backToDriver}
                    class="py-1 text-sm font-bold px-7 md:text-base lg:py-2 lg:px-10 bg-light-neon text-darker-neon transition-class terminal-btn"
                    >Back</button
                >
            </div>
            <div
                class:font-bold={$terminalDefault}
                class="flex items-center justify-center w-1/3"
            >
                <button
                    on:click={() => {
                        terminalDefault.set(true);
                        playClickSound();
                    }}
                    class="lg:text-2xl hover:text-hover-neon">Projects</button
                >
            </div>
            <div
                class:font-bold={!$terminalDefault}
                class="flex items-center justify-center w-1/3"
            >
                <button
                    on:click={() => {
                        terminalDefault.set(false);
                        playClickSound();
                    }}
                    class="lg:text-2xl hover:text-hover-neon">Contact</button
                >
            </div>
        </div>
        <hr
            class="w-4/5 h-px border-light-neon"
            transition:fade={{ duration: 500 }}
        />
        <div
            transition:fade={{ duration: 500 }}
            class="flex flex-col w-4/5 gap-5 my-5 overflow-y-scroll lg:gap-10 lg:my-12 scrol h-4/5"
        >
            {#if $terminalDefault}
                <Projects />
            {:else}
                <Contact />
            {/if}
        </div>
    {/if}
</div>

<style>
    .terminal {
        background-color: var(--darker-neon);
    }
</style>
