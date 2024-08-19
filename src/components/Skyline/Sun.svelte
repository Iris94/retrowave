<script>
    import { techStack } from "../../Store/settings";
    import { fade } from "svelte/transition";
</script>


{#if !$techStack}
<div transition:fade={{ duration: 500 }} class="sun-element"></div>
{/if}

<style>
    .sun-element {
        width: 10%;
        height: 60%;
        border-radius: 50%;
        background: rgb(224,69,123);
        background: linear-gradient(0deg, rgba(224,69,123,1) 20%, rgba(237,155,51,1) 76%);
        position: absolute;
        top: 10%;
        box-shadow: 0 0 13vw 1vw var(--secondary-warm),
                    0 0 16vw 2vw var(--primary-accent),
                    0 0 19vw 3vw var(--dark-shade);
    }
</style>