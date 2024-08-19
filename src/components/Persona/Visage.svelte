<script>
    import persona from "$lib/images/persona.jpg";
    import { activeVoiceText, activeVoiceAudio, asyncDefaultText, asyncHackText } from "../../Store/settings.js";
    import { voiceText } from "$lib/data/voiceText.js";
    import { onMount } from "svelte";

    onMount(() => {
        let defaultText;
        
        if (!$asyncDefaultText) {
            defaultText = voiceText.find(t => t.active === true);
        } 

        if ($asyncDefaultText) {
            defaultText = voiceText.find(t => t.id == 'default-async')
        }

        if ($asyncHackText) {
            defaultText = voiceText.find(t => t.id == 'hack-async')
            asyncHackText.set(false)
        }

        if (defaultText && !$asyncDefaultText) {
            activeVoiceText.set(defaultText.content);
            activeVoiceAudio.set(defaultText.voice)
            asyncDefaultText.set(true)
        } else {
            activeVoiceText.set(defaultText.content);
            activeVoiceAudio.set(defaultText.voice)
        }
    });
</script>

<div class="flex w-full gap-3 h-1/6">
    <div class="w-1/4 h-full p-px persona-wrap bg-light-neon">
        <img
            src={persona}
            alt="avatar-img"
            class="w-full h-full persona-wrap"
        />
    </div>

    <div class="w-3/4 p-px h-fit data-wrap bg-light-neon">
        <div class="w-full h-full p-3 bg-darker-neon data-wrap">
            <p class="text-light-neon">
                {$activeVoiceText}
            </p>
        </div>
    </div>
</div>
