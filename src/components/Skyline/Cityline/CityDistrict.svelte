<script>
    import Windows from "../../Shared/Windows.svelte";   
    
    const generateWindows = () => {
        const randomWindowsCount =
            Math.floor(Math.random() * (50 - 20 + 1)) + 20;
        return Array.from({ length: randomWindowsCount });
    };

    const buildings = [
        { width: "w-1/5", height: "h-52", hasWindows: true },
        { width: "w-1/5", height: "h-56", hasWindows: true },
        { width: "w-1/5", height: "h-48", hasWindows: true },
        { width: "w-1/5", height: "h-52", hasWindows: true },
        { width: "w-1/5", height: "h-32", hasWindows: true },
        { width: "w-1/5", height: "h-1/4", hasWindows: false },
        { width: "w-3/5", height: "h-1/2", hasWindows: true },
        { width: "w-1/5", height: "h-2/3", hasWindows: true },
        { width: "w-1/5", height: "h-1/2", hasWindows: false },
        { width: "w-1/2", height: "h-1/3", hasWindows: false },
        { width: "w-1/4", height: "h-4/6", hasWindows: true },
        { width: "w-1/4", height: "h-1/2", hasWindows: false },
    ];

    buildings.forEach((building) => {
        if (building.hasWindows) {
            building.width += " x-line bg-tertiary-dark";
        } else {
            building.width += " city-light";
        }
    });
</script>

<div class="flex w-1/3 h-full gap-2 px-5">
    <div class="flex items-end w-1/3 h-full">
        {#each buildings.slice(0, 5) as building}
            <div class={`${building.width} ${building.height}`}>
                {#if building.hasWindows}
                    {#each generateWindows() as _}
                        <Windows />
                    {/each}
                {/if}
            </div>
        {/each}
    </div>

    <div class="flex items-end w-1/3 h-full">
        {#each buildings.slice(5, 8) as building}
            <div class={`${building.width} ${building.height}`}>
                {#if building.hasWindows}
                    {#each generateWindows() as _}
                        <Windows />
                    {/each}
                {/if}
            </div>
        {/each}
    </div>

    <div class="flex items-end w-1/3 h-full">
        {#each buildings.slice(8, buildings.length) as building}
            <div class={`${building.width} ${building.height}`}>
                {#if building.hasWindows}
                    {#each generateWindows() as _}
                        <Windows />
                    {/each}
                {/if}
            </div>
        {/each}
    </div>
</div>
