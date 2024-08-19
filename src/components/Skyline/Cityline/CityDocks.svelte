<script>
    import Windows from "../../Shared/Windows.svelte";   
    
    const generateWindows = () => {
        const randomWindowsCount =
            Math.floor(Math.random() * (50 - 20 + 1)) + 20;
        return Array.from({ length: randomWindowsCount });
    };

    const buildings = [
        { width: "w-1/3", height: "h-1/3", hasWindows: false },
        { width: "w-1/3", height: "h-1/4", hasWindows: false },
        { width: "w-2", height: "h-full", hasWindows: false },
        { width: "w-1/4", height: "h-1/2", hasWindows: true },
        { width: "w-5", height: "h-1/6", hasWindows: true },
        { width: "w-1/3", height: "h-2/3", hasWindows: true },
        { width: "w-10", height: "h-1/3", hasWindows: true },
        { width: "w-7", height: "h-3/5", hasWindows: true },
        { width: "w-full", height: "h-1/2", hasWindows: true },
    ];

    buildings.forEach((building) => {
        if (building.hasWindows) {
            building.width += " x-line bg-tertiary-dark";
        } else {
            building.width += " city-light";
        }
    });
</script>

<div class="flex w-1/3 h-full gap-1 px-5">
    <div class="flex items-end w-1/3 h-full">
        {#each buildings.slice(0, 3) as building}
            <div
                class={`${building.width} ${building.height} city-light`}
            ></div>
        {/each}
    </div>

    <div class="flex items-end w-1/3 h-full">
        {#each buildings.slice(3, -1) as building}
            <div class={`${building.width} ${building.height} x-line`}>
                {#if building.hasWindows}
                    {#each generateWindows() as _}
                        <Windows />
                    {/each}
                {/if}
            </div>
        {/each}
    </div>

    <div class="flex items-end w-1/3 h-full">
        <div
            class={`${buildings[buildings.length - 1].width} ${buildings[buildings.length - 1].height} x-line`}
        >
            {#if buildings[buildings.length - 1].hasWindows}
                {#each generateWindows() as _}
                    <Windows />
                {/each}
            {/if}
        </div>
    </div>
</div>
