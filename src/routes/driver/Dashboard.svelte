<script>
import Console from "../../components/Dashboard/Console.svelte";
import Pilot from "../../components/Dashboard/Pilot.svelte";
import Copilot from "../../components/Dashboard/Copilot.svelte";
</script>

<div class="flex items-end w-full h-1/2">
    <div class="flex w-full h-1/2 dashboard-wrap">
        <Pilot />
        <Console />
        <Copilot />
    </div>
</div>

<style>
    .dashboard-wrap {
        background: var(--car-dark);
        border-radius: 50% 50% 0 0;
        box-shadow: inset 0 0.75vw 0.9vw 0.1vw var(--primary-accent);
    }
</style>
