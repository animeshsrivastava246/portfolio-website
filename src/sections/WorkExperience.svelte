<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import { applyTilt } from "../utils/tilt";
	import data from "../data/data.json";

	let timelineRef: HTMLElement;
	let itemsRef: HTMLElement[] = [];
	let visible = false;

	// Observe when the section is in the viewport
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !visible) {
					visible = true;
					observer.disconnect(); // Stop observing once visible

					// Apply tilt effect to each card
					setTimeout(() => {
						itemsRef.forEach((el) => el && applyTilt(el));
					}, 500);
				}
			},
			{ threshold: 0.3 } // Trigger when 30% of the section is visible
		);

		if (timelineRef) observer.observe(timelineRef);
	});
</script>

<section
	id="WorkExperience"
	bind:this={timelineRef}
	class="section py-20 px-6 md:px-12"
>
	{#if visible}
		<div class="max-w-6xl mx-auto">
			<!-- Section Title -->
			<h1 in:fly={{ x: -200, duration: 350 }}>Work Experience</h1>

			<!-- Timeline -->
			<div
				class="relative mt-12 border-l-4 border-accent border-opacity-50 pl-3 space-y-10"
				in:fly={{ x: 200, duration: 350, delay: 350 }}
			>
				{#each data.experience as exp, i}
					<div bind:this={itemsRef[i]} class="relative group">
						<!-- Glowing Dot -->
						<div
							class="absolute -left-6 w-5 h-5 bg-accent border-4 border-background rounded-full
							transition-transform duration-350 group-hover:scale-125"
						></div>

						<!-- Experience Card -->
						<div
							class="bg-primary bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-md border
							border-accent max-w-[48rem] transition-all duration-350 group-hover:scale-[1.02]"
						>
							<h3 class="text-2xl font-semibold text-secondary">{exp.title}</h3>
							<p class="text-xl text-theme font-medium">{exp.company}</p>
							<p class="text-sm text-white mt-1">{exp.duration}</p>
							<p class="text-md text-theme mt-3 leading-relaxed">
								{exp.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</section>

<style>
	#WorkExperience {
		background-image: url("/assets/backdrops/WorkExperienceBanner.webp");
	}
</style>
