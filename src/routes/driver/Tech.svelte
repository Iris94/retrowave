<script>
    import { techStack } from "../../Store/settings";
    import { techstack } from "$lib/data/techstack.js";
    import { fade } from "svelte/transition";
    import Binary from "../../components/Widgets/Binary.svelte";
    import Icon from "@iconify/svelte";
    let techstackShow = false;
</script>

<div class="absolute w-full top-7 h-2/5">
    <Binary
        color="var(--primary-accent)"
        on:animationend={() => (techstackShow = true)}
    />

    {#if techstackShow && $techStack}
        <div transition:fade={{ duration: 500 }}
            class="flex flex-wrap items-center justify-center w-full h-full gap-20"
        >
            {#each techstack as tech}
                <div class="flex flex-col items-center justify-center gap-2 p-4 rounded-lg w-fit h-fit text-secondary-warm"
                >
                    <div class="flex justify-center w-full h-2/3">
                        <Icon icon={tech.icon} width="3vw" />
                    </div>
                    <div class="flex justify-center w-full font-bold h-1/3">
                        <p>
                            {tech.label}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>
