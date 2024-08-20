<script>
	import "../app.css";
	import Hud from "../components/Widgets/Hud.svelte";
	import Skyline from "../components/Skyline/Skyline.svelte";
	import Road from "../components/Road/Road.svelte";
	import Mobilescreen from "../components/Widgets/Mobilescreen.svelte";

	import { onMount } from "svelte";

	function enterFullscreen() {
		const docEl = document.documentElement;

		if (docEl.requestFullscreen) {
			docEl.requestFullscreen();
		} else if (docEl.mozRequestFullScreen) {
			// Firefox
			docEl.mozRequestFullScreen();
		} else if (docEl.webkitRequestFullscreen) {
			// Chrome, Safari, and Opera
			docEl.webkitRequestFullscreen();
		} else if (docEl.msRequestFullscreen) {
			// IE/Edge
			docEl.msRequestFullscreen();
		}
	}

	function handleUserInteraction() {
		enterFullscreen();
		document.removeEventListener("click", handleUserInteraction);
		document.removeEventListener("touchstart", handleUserInteraction);
	}

	onMount(() => {
		document.addEventListener("click", handleUserInteraction);
		document.addEventListener("touchstart", handleUserInteraction);
	});
</script>

<div class="overflow-hidden app">
	<header>
		<Hud />
		<Mobilescreen />
	</header>

	<main class="flex-col background">
		<slot />
		<Skyline />
		<Road />
		<svg width="0" height="0">
			<filter id="grain">
				<feTurbulence
					type="turbulence"
					baseFrequency="0.5"
					numOctaves="3"
					result="turbulence"
				/>
				<feColorMatrix
					type="saturate"
					values="0"
					result="desaturatedTurbulence"
				/>
				<feBlend
					in="SourceGraphic"
					in2="desaturatedTurbulence"
					mode="multiply"
				/>
			</filter>
		</svg>
	</main>
</div>
