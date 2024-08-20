<script>
    import Highway from "./Highway.svelte";
    import Net from "./Net.svelte";
</script>

<div class="w-full overflow-hidden h-2/3">
    <div class="w-full h-full net-grid-wrapper">
        <Net />
        <Highway />
    </div>
</div>

<style>
    .net-grid-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        perspective: 250px;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 999px) {
        .net-grid-wrapper {
            perspective: 120px;
        }
    }

    @media (max-width: 699px) {
        .net-grid-wrapper {
            perspective: 52px;
        }
    }
</style>
