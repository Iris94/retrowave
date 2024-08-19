<script>
    import Code from "./Datacore/Code.svelte";
    import Id from "./Datacore/Id.svelte";
    import About from "./Datacore/About.svelte";
    import { fade } from "svelte/transition";
    import { activeVoiceText, activeVoiceAudio } from "../../Store/settings.js";
    import { voiceText } from "$lib/data/voiceText.js";
    import { playClickSound } from "$lib/data/sounds.js";

    let selectedCard = null;
    const id = "id card";
    const whyCode = "why code";
    const about = "about me";

    function selectData(card) {
        selectedCard = card;
        let cardText = voiceText.find(t => t.id === card)
        if (cardText) {
            activeVoiceText.set(cardText.content)
            activeVoiceAudio.set(cardText.voice)
        }
        playClickSound()
    }

    document.addEventListener('click', (e) => {
        const cardElement = document.querySelector('.selected-card');
        const buttonElement = e.target.closest('button');
        if (selectedCard && cardElement && !cardElement.contains(e.target) && !buttonElement) {
            selectedCard = null;
        }
    });
</script>

<div class="flex w-full gap-3 pt-16 h-2/6">
    <div class="flex flex-col items-start justify-start w-1/3 h-full gap-3">
        <button
            on:click={() => selectData(id)}
            class="text-green-300 sony-button data-wrap"
        >
            <div class="sony-div">&#9650;</div>
            <p class="sony-p">{id}</p>
        </button>

        <button
            on:click={() => selectData(whyCode)}
            class="text-purple-300 sony-button data-wrap"
        >
            <div class="sony-div">O</div>
            <p class="sony-p">{whyCode}</p>
        </button>

        <button
            on:click={() => selectData(about)}
            class="sony-button text-cyan-300 data-wrap"
        >
            <div class="sony-div">X</div>
            <p class="sony-p">{about}</p>
        </button>
    </div>

    {#if selectedCard != null}
        <div
            transition:fade={{duration: 250}}
            class="flex flex-col justify-start w-2/3 gap-1 p-5 text-white h-fit bg-car-dark selected-card"
        >
            {#if selectedCard == id}
                <Id />
            {:else if selectedCard == whyCode}
                <Code />
            {:else}
                <About />
            {/if}
        </div>
    {/if}
</div>

<style>
    .sony-button {
        background-color: var(--car-dash);
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 7.5px 10px;
        font-weight: 500;
    }

    .sony-div {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        text-align: center;
        outline: 1px solid;
        font-size: 20px;
        z-index: 2;
    }
</style>
