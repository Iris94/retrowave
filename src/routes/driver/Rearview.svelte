<script>
    import { techStack } from "../../Store/settings";
    import { fly } from "svelte/transition";
</script>

<div class="relative flex flex-col w-full h-1/2">
    <div class="w-full h-1/6 roof-part"></div>
    
    {#if !$techStack}
        <div transition:fly={{ y: -500, duration: 2000 }}
            class="absolute flex flex-col items-center w-full h-1/2 top-2">
            <div class="w-1 h-1/3 bg-car-dark"></div>
            <div class="w-1/5 h-2/3 rearview-mirror"></div>
        </div>
    {/if}
</div>

<style>
    .roof-part {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 95% 35%, 5% 35%, 0% 100%);
        background-color: var(--car-dark);
    }

    .rearview-mirror {
        border-radius: 25% 25% 10% 10%;
        border: 2px var(--car-dark) solid;
        background: rgb(224, 69, 123);
        background: linear-gradient(
            0deg,
            rgba(224, 69, 123, 1) 0%,
            rgba(5, 28, 44, 1) 100%
        );
    }
</style>
