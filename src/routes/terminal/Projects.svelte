<script>
    import Icon from "@iconify/svelte";
    import { projects } from "$lib/data/projects.js";
</script>

{#each projects as item}
    <a href={item.link} target="_blank" class="w-3/5 p-px h-fit data-wrap bg-light-neon">
        <div
            class="relative flex w-full h-full gap-5 data-wrap bg-darker-neon project-btn transition-class text-light-neon"
        >
            <div class="flex flex-col w-2/5">
                <div class="flex items-center justify-center w-full p-2 h-1/6">
                    <p class="font-extrabold">{item.title}</p>
                </div>
                <div class="w-full h-5/6">
                    <img src={item.image} alt="gif" class="object-cover w-full h-full" />
                </div>
            </div>
            <div class="flex flex-col items-center justify-center w-3/5 h-full">
                <p class="w-full h-full p-2">
                    {item.description}
                </p>
                <div
                    class="flex items-center self-end justify-center w-1/6 pb-1 h-fit"
                >
                    <Icon
                        icon="ion:open-outline"
                        width="20px"
                        height="20px"
                    />
                </div>
            </div>
        </div>
    </a>
{/each}

<style>
    .project-btn:hover {
        color: var(--darker-neon);
        box-shadow: inset 0 0 0 10vw var(--light-neon);
    }
</style>
