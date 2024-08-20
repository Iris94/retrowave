<script>
    import { isMobile } from "../../Store/settings";
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";

    function checkOrientation() {
        let deviceWidth = window.innerWidth;
        let deviceHeight = window.innerHeight;

        if (deviceHeight > deviceWidth) {
            $isMobile = true; 
        } else {
            $isMobile = false; 
        }
    }

    onMount(() => {
        checkOrientation();
        window.addEventListener("resize", checkOrientation);

        return () => {
            window.removeEventListener("resize", checkOrientation);
        };
    });
</script>

{#if $isMobile}
    <div
        class="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-car-dark"
    >
        <div class="flex flex-col items-center justify-center p-10 gap-7">
            <div class="rotation">
                <Icon icon="noto:mobile-phone" width="75px" />
            </div>
            <p class="text-lg font-semibold text-white">Rotate your phone</p>
            <p class="text-xs text-center text-white">For best experience, please use laptop or larger screen</p>
        </div>
    </div>
{/if}

<style>
    div {
        z-index: 1000;
    }

    .rotation {
        animation: rotate 5s infinite;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        } 50% {
            transform: rotate(90deg)
        }
    }
</style>
