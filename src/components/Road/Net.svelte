<div class="net-grid"></div>

<style>
    .net-grid {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        transform: rotateX(75deg);
    }

    .net-grid::before,
    .net-grid::after {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 200%;
        height: 100%;
        background: repeating-linear-gradient(
            to right,
            var(--secondary-cool) 0,
            var(--secondary-cool) 1px,
            transparent 1px,
            transparent 50px
        );
        transform: translateX(-50%);
    }

    .net-grid::after {
        background: repeating-linear-gradient(
            to bottom,
            var(--secondary-cool) 0,
            var(--secondary-cool) 1px,
            transparent 1px,
            transparent 50px
        );
    }
</style>
