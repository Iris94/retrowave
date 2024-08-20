<script>
    const about = [
        {label: "music",    value: "techno"},
        {label: "for fun",  value: "driving"},
        {label: "play:?",   value: "4 instruments"}
    ]
</script>

{#each about as item}
<div class="flex">
    <p class="w-full">{item.label}</p>
    <p class="w-full">{item.value}</p>
</div>
{/each}

<hr class="w-full my-1 lg:my-5" />

<p>
    When I'm not coding, I’m cruising through the night with synthwave on blast. I love cooking up both meals and ideas, diving into software books, or just chilling with friends. Coding is my passion, but life’s all about balance.
</p>