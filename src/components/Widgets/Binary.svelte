<script>
    import { binary } from '$lib/animations/binary.js';
    import { createEventDispatcher, onMount } from 'svelte';

    export let color; 

    onMount(() => {
        binary(color);
        const matrix = document.querySelector('.matrix');
        matrix.addEventListener('animationend', (event) => {
            if (event.animationName == 'fadeOut') {
                dispatch('animationend');
            }
        })
    })

    const dispatch = createEventDispatcher();
</script>

<div class="absolute flex flex-wrap w-4/5 h-4/5 matrix"></div>