<script>
    import { onMount, onDestroy } from "svelte";
    import { activeVoiceAudio, voice } from "../../Store/settings";
    import { get } from "svelte/store";

    let audioElement;
    let unsubscribeVoice;
    let unsubscribeMute;

    function updateAudioPlayback() {
        if (audioElement) {
            if (get(activeVoiceAudio)) {
                audioElement.src = get(activeVoiceAudio); 
                audioElement.play().catch(error => console.error('Playback error:', error)); 
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
        audioElement.volume = 0.50;

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
        if (unsubscribeVoice) {
            unsubscribeVoice();
        }
        if (unsubscribeMute) {
            unsubscribeMute();
        }
        if (audioElement) {
            audioElement.pause();
            audioElement = null;
        }
    });
</script>

<audio id="voicePlayer" style="display: none;"></audio>
