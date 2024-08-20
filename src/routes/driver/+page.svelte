<script>
    import Dashboard from "./Dashboard.svelte";
    import Rearview from "./Rearview.svelte";
    import Persona from "../../components/Persona/Persona.svelte";
    import Tech from "./Tech.svelte";
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";
    import { activeVoiceAudio, driveMode, personaNeonPage, techStack } from "../../Store/settings";
    import { onMount } from "svelte";
    import { activeVoiceText, asyncDriverText } from "../../Store/settings";
    import { voiceText } from "$lib/data/voiceText.js";
    import { playClickSound, startEngine }from "$lib/data/sounds.js"

    onMount(() => {
        $driveMode = !$driveMode;    
        let driverText;
        
        if (!$asyncDriverText) {
            driverText = voiceText.find(t => t.id == document.title.toLowerCase());
        }
        
        if ($asyncDriverText) {
            driverText = voiceText.find(t => t.id == `${document.title.toLowerCase()}-async`);
        }
        
        if (driverText && !$asyncDriverText) {
            activeVoiceText.set(driverText.content);
            activeVoiceAudio.set(driverText.voice)
            asyncDriverText.set(true)
            startEngine();
        } else {
            activeVoiceText.set(driverText.content);
            activeVoiceAudio.set(driverText.voice)
        }
    });

    function backToPage() {
        playClickSound();
        $personaNeonPage = !$personaNeonPage
        goto('/')
    }
</script>

<svelte:head>
    <title>Driver</title>
</svelte:head>

<div class="absolute top-0 left-0 z-30 flex flex-col w-full h-full">
    <Rearview />
    <Dashboard />
    <Persona />

    <button on:click={backToPage}
        class="absolute p-1 left-2 bottom-40 lg:bottom-72">
        <Icon icon="fluent-emoji-high-contrast:back-arrow" width="3.5vw" class="text-light-neon hover:text-hover-neon" />
    </button>
    
    {#if $techStack} 
    <Tech />
    {/if}
</div>
