<script>
    import CityDistrict from "./Cityline/CityDistrict.svelte";
    import CityDocks from "./Cityline/CityDocks.svelte";
    import CitySquare from "./Cityline/CitySquare.svelte";
</script>

<div class="cityline">
    <CityDocks />
    <CitySquare />
    <CityDistrict />
</div>

<style>
    .cityline {
        position: relative;
        top: 87%;
        width: 100%;
        height: 100%;
        display: flex;
    }
</style>
