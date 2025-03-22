<script lang="ts">
	import data from "../data/data.json";
	import { fly } from "svelte/transition";
	import { onMount } from "svelte";

	let visible = false;
	let heroRef: HTMLElement;

	// Observer to detect when the section is visible
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					observer.disconnect(); // Stop observing after it's visible
				}
			},
			{ threshold: 0.3 }
		);

		if (heroRef) observer.observe(heroRef);
	});

	function scrollToElement(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		} else {
			console.error("Element NOT found:", id);
		}
	}
</script>

<section
	id="Hero"
	bind:this={heroRef}
	class="section relative w-full flex flex-col justify-center items-center text-center mt-0"
	style="background-image: url('/assets/backdrops/HeroBanner.webp');"
>
	<!-- Background Overlay -->
	<div class="absolute inset-0 bg-black/50 backdrop-blur-lg -z-10"></div>

	{#if visible}
		<div
			class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6 md:px-12"
		>
			<!-- Left Side: Image & Name -->
			<div
				in:fly={{ x: -200, duration: 500 }}
				class="flex flex-col items-center space-y-4"
			>
				<img
					src="/assets/avatars/hero.jpg"
					alt={data.info.name}
					loading="eager"
					class="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-2xl"
				/>
				<code class="text-3xl md:text-4xl font-semibold text-secondary"
					>{data.info.name}</code
				>
			</div>

			<!-- Right Side: Text -->
			<blockquote
				in:fly={{ x: 200, duration: 500, delay: 500 }}
				class="text-4xl md:text-6xl font-bold text-theme text-left leading-tight drop-shadow-[2px_2px_rgba(0,0,0)]"
			>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			</blockquote>
		</div>

		<!-- Scroll Button (Fixed at Bottom) -->
		<div class="absolute bottom-4 flex justify-center items-center">
			<button
				onclick={() => scrollToElement("WorkExperience")}
				class="btn bg-[var(--accent-color)] px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-[0_0_12px_var(--accent-color)] transition-all duration-350"
			>
				View Projects
			</button>
		</div>
	{/if}
</section>
