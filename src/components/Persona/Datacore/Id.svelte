<script>
    import { github, linkedin, instagram } from "../../../Store/settings";
    
    const idInfo = [
        { label: "name", value: "mirza hajric" },
        { label: "age", value: "30" },
        { label: "work", value: "maus.ba" },
        { label: "title", value: "front-end/dev" },
    ];

    const idError = [
        { label: "location", value: "unknown", class: "text-primary-accent" },
        { label: "alias", value: "iris", class: "text-light-neon" },
        { label: "last seen", value: "code city", class: "text-light-neon" },
    ];

    const idSocial = [
        { label: "github", value: $github },
        { label: "linkedin", value: $linkedin },
        { label: "instagram", value: $instagram },
    ];

    
</script>

{#each idInfo as info}
    <div class="flex">
        <p class="w-full">{info.label}</p>
        <p class="w-full">{info.value}</p>
    </div>
{/each}

<hr class="w-full my-1 lg:my-5" />

{#each idError as error}
    <div class="flex {error.class}">
        <p class="w-full">{error.label}</p>
        <p class="w-full">{error.value}</p>
    </div>
{/each}

<hr class="w-full my-1 lg:my-5" />

{#each idSocial as social}
    <div class="flex">
        <p class="w-full">{social.label}</p>
        <!-- svelte-ignore a11y-missing-content -->
        <a href={social.value} target="_blank" class="text-purple-300 underline">/{social.label}</a>
    </div>
{/each}
