<script lang="ts">
	import data from "../data/data.json";
	import { fly } from "svelte/transition";
	import { onMount } from "svelte";

	let visible = false; // Initially hidden
	let heroRef: HTMLElement;

	onMount(() => {
		visible = true; // Set to true immediately after mount
	});

	function scrollToElement(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}
</script>

<section
	id="Hero"
	bind:this={heroRef}
	class="section relative w-full flex flex-col justify-center items-center text-center mt-0"
>
	{#if visible}
		<div
			class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6 md:px-12"
		>
			<!-- Left Side: Image & Name -->
			<div
				in:fly={{ x: -200, duration: 350 }}
				class="flex flex-col items-center space-y-4"
			>
				<img
					src="/assets/avatars/hero.webp"
					alt={data.info.name}
					width="300"
					height="300"
					loading="lazy"
					class="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-2xl"
				/>
				<code
					class="text-3xl md:text-4xl font-semibold text-secondary drop-shadow-[2px_2px_rgba(0,0,0)]"
					>{data.info.name}</code
				>
			</div>

			<!-- Right Side: Text -->
			<blockquote
				in:fly={{ x: 200, duration: 350, delay: 350 }}
				class="text-3xl md:text-5xl font-bold text-theme text-left leading-tight drop-shadow-[2px_2px_rgba(0,0,0)]"
			>
				Building Code, <br />Writing Tech, <br />Creating Impact
			</blockquote>
		</div>
		<h1 class="mt-12" in:fly={{ y: 200, duration: 350, delay: 1050 }}>
			Code Crusader
		</h1>
		<!-- Scroll Button (Fixed at Bottom) -->
		<div class="absolute bottom-4 flex justify-center items-center">
			<button
				on:click={() => scrollToElement("Projects")}
				class="btn bg-[var(--accent-color)] px-6 py-3 rounded-full shadow-lg
				hover:scale-105 hover:shadow-[0_0_12px_var(--accent-color)] transition-all duration-350"
			>
				View Projects
			</button>
		</div>
	{/if}
</section>

<style>
	#Hero {
		background-image: url("/assets/backdrops/HeroBanner.webp");
	}
</style>
