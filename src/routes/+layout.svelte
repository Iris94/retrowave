<script>
	import "../app.css";
	import Hud from "../components/Widgets/Hud.svelte";
	import Skyline from "../components/Skyline/Skyline.svelte";
	import Road from "../components/Road/Road.svelte";
</script>

<div class="overflow-hidden app">
	<header>
		<Hud />
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
