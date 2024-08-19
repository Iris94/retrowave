<script>
    import Icon from "@iconify/svelte";
    import { github, linkedin, instagram } from "../../Store/settings.js";
</script>

<div class="absolute z-50 flex gap-5 left-5 bottom-5 text-light-neon">
    <a href={$github} class="hover:text-hover-neon" target="_blank">
        <Icon icon="simple-icons:github" width="2vw" />
    </a>

    <a href={$linkedin} class="hover:text-hover-neon" target="_blank">
        <Icon icon="simple-icons:linkedin" width="2vw" />
    </a>
    <a href={$instagram} class="hover:text-hover-neon" target="_blank">
        <Icon icon="simple-icons:instagram" width="2vw" />
    </a>
</div>
