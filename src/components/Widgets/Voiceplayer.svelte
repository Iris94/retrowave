<script>
    import { onMount, onDestroy } from "svelte";
    import { activeVoiceAudio, voice } from "../../Store/settings";
    import { get } from "svelte/store";

    let audioElement;
    let unsubscribeVoice;
    let unsubscribeMute;
    let playPromise;

    async function updateAudioPlayback() {
        if (audioElement) {
            if (playPromise) {
                try {
                    await playPromise;
                    audioElement.pause(); 
                } catch (error) {
                    console.warn("Previous play request was interrupted:", error);
                }
            }

            const newSource = get(activeVoiceAudio);

            if (newSource) {
                if (audioElement.src !== newSource) {
                    audioElement.src = newSource;
                }

                try {
                    playPromise = audioElement.play();
                    await playPromise;
                } catch (error) {
                    console.error("Audio playback failed:", error);
                } finally {
                    playPromise = null; 
                }
            } else {
                audioElement.pause();
            }
        }
    }

    function updateMuteState() {
        if (audioElement) {
            audioElement.muted = !get(voice);
        }
    }

    onMount(() => {
        audioElement = document.querySelector('#voicePlayer');
        audioElement.volume = 0.45;

        unsubscribeVoice = activeVoiceAudio.subscribe(() => {
            updateAudioPlayback();
        });

        unsubscribeMute = voice.subscribe(() => {
            updateMuteState();
        });

        updateAudioPlayback();
        updateMuteState();
    });

    onDestroy(() => {
        if (unsubscribeVoice) unsubscribeVoice();
        if (unsubscribeMute) unsubscribeMute();

        if (audioElement) {
            audioElement.pause();
            audioElement = null;
        }
    });
</script>

<audio id="voicePlayer" style="display: none;"></audio>
