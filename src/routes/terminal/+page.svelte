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
                    class="px-10 py-2 font-bold bg-light-neon text-darker-neon transition-class terminal-btn"
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
                    class="text-2xl hover:text-hover-neon">Projects</button
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
                    class="text-2xl hover:text-hover-neon">Contact</button
                >
            </div>
        </div>
        <hr
            class="w-4/5 h-px border-light-neon"
            transition:fade={{ duration: 500 }}
        />
        <div
            transition:fade={{ duration: 500 }}
            class="flex flex-col w-4/5 gap-10 my-12 overflow-y-scroll scrol h-4/5"
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
