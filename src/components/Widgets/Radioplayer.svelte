<script>
    import { onMount, onDestroy } from "svelte";
    import { radio, radioStation } from "../../Store/settings";
    import { get } from 'svelte/store';

    let audioElement;
    let unsubscribeRadio;

    function updateAudioPlayback() {
        if (get(radio)) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }

    onMount(() => {
        audioElement = document.querySelector('#audioPlayer');
        audioElement.volume = 0.10;
        updateAudioPlayback();

        unsubscribeRadio = radio.subscribe(() => {
            updateAudioPlayback();
        });
    });

    onDestroy(() => {
        if (unsubscribeRadio) {
            unsubscribeRadio(); 
        }
        audioElement.pause(); 
        audioElement = null; 
    });
</script>

<audio id="audioPlayer" src={$radioStation} style="display: none;"></audio>
