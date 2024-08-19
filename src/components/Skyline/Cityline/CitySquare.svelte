<script>
    import Windows from "../../Shared/Windows.svelte";   
    
    const generateWindows = () => {
        const randomWindowsCount =
            Math.floor(Math.random() * (50 - 20 + 1)) + 20;
        return Array.from({ length: randomWindowsCount });
    };

    const buildingsFront = [
        { width: "w-1/5 x-line bg-tertiary-dark", height: "h-1/2" },
        { width: "w-3 x-line bg-tertiary-dark", height: "h-1/5" },
        { width: "w-1/4 x-line bg-tertiary-dark", height: "h-2/3" },
        { width: "w-1/3 x-line bg-tertiary-dark", height: "h-1/4" },
        { width: "w-2/3 x-line bg-tertiary-dark", height: "h-1/3" },
        { width: "w-1/2 x-line bg-tertiary-dark", height: "h-full" },
        { width: "w-1/3 x-line bg-tertiary-dark", height: "h-1/2" },
    ];

    const buildingsBack = [
        { width: "w-1/5 city-light", height: "h-2/3" },
        { width: "w-2 city-light", height: "h-5/6" },
        { width: "w-2 city-light", height: "h-full" },
        { width: "w-1/2 city-light", height: "h-1/3" },
        { width: "w-full city-light", height: "h-1/3" },
        { width: "w-1/4 city-light", height: "h-4/6" },
        { width: "w-2/4 city-light", height: "h-3/6" },
        { width: "w-1/4 city-light", height: "h-5/6" },
        { width: "w-1/2 city-light", height: "h-2/5" },
    ];
</script>

<div class="relative flex w-1/3 h-full gap-1 px-5">
    <div class="absolute left-0 z-20 flex items-end w-full h-full">
        <div class="flex items-end w-1/2 h-full">
            {#each buildingsFront.slice(0, 4) as building}
                <div class={`${building.width} ${building.height}`}>
                    {#each generateWindows() as _}
                        <Windows />
                    {/each}
                </div>
            {/each}
        </div>

        <div class="flex items-end w-1/4 h-full">
            {#each buildingsFront.slice(4, 5) as building}
                <div class={`${building.width} ${building.height}`}>
                    {#each generateWindows() as _}
                        <Windows />
                    {/each}
                </div>
            {/each}
        </div>

        <div class="flex items-end w-1/4 h-full">
            {#each buildingsFront.slice(5) as building}
                <div class={`${building.width} ${building.height}`}>
                    {#each generateWindows() as _}
                        <Windows />
                    {/each}
                </div>
            {/each}
        </div>
    </div>

    <div class="z-10 flex items-end w-full h-full back">
        <div class="flex items-end w-1/2 h-full">
            {#each buildingsBack.slice(0, 5) as building}
                <div class={`${building.width} ${building.height}`}></div>
            {/each}
        </div>

        <div class="flex items-end w-1/4 h-full">
            {#each buildingsBack.slice(5, 8) as building}
                <div class={`${building.width} ${building.height}`}></div>
            {/each}
        </div>

        <div class="flex items-end w-1/4 h-full">
            {#each buildingsBack.slice(buildingsBack.length - 1) as building}
                <div class={`${building.width} ${building.height}`}></div>
            {/each}
        </div>
    </div>
</div>
