<script lang="ts">
	import { fly } from "svelte/transition";
	import { onMount } from "svelte";
	let visible = false;

	// Observer to detect when the section is visible
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					observer.disconnect(); // Stop observing after it's visible
				}
			},
			{ threshold: 0.3 } // Trigger when 30% of Hero section is visible
		);

		const heroSection = document.getElementById("Hero");
		if (heroSection) observer.observe(heroSection);
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

<section id="Hero" class="section bg-secondary">
	{#if visible}
		<!-- Content -->
		<div
			class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-3/4 mx-auto"
		>
			<!-- Left Side: Image & Name -->
			<div
				in:fly={{ x: -200, duration: 500 }}
				class="flex flex-col items-center space-y-4"
			>
				<img
					src="/assets/avatars/hero.jpg"
					alt="Avatar Hero"
					loading="lazy"
					class="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-primary shadow-lg"
				/>
				<code class="text-3xl md:text-4xl text-white font-semibold"
					>John Doe</code
				>
			</div>

			<!-- Right Side: Text -->
			<blockquote
				in:fly={{ x: 200, duration: 500, delay: 500 }}
				class="text-4xl md:text-6xl font-bold text-theme text-left leading-tight"
			>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			</blockquote>
		</div>

		<!-- Scroll Button (Fixed at Bottom) -->
		<div
			class="flex justify-center items-end w-full h-full absolute bottom-16"
			in:fly={{ y: 200, duration: 500, delay: 1000 }}
		>
			<button onclick={() => scrollToElement("WorkExperience")} class="btn">
				View Projects
			</button>
		</div>
	{/if}
</section>

<style>
	#Hero {
		background: url("/assets/backdrops/HeroBanner.svg") center/cover no-repeat;
		margin-top: 0;
	}
</style>
