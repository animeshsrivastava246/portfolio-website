<script lang="ts">
	import { onMount } from "svelte";
	import { fadeIn } from "../animations/gsap";
	import { applyTilt } from "../utils/tilt";
	import data from "../data/data.json";

	let timelineRef: HTMLElement;
	let itemsRef: HTMLElement[] = [];

	onMount(() => {
		fadeIn(timelineRef);
		itemsRef.forEach((el) => {
			fadeIn(el);
			applyTilt(el);
		});
	});
</script>

<section
	id="WorkExperience"
	bind:this={timelineRef}
	class="section bg-theme py-20 px-6 md:px-12"
>
	<div class="max-w-5xl mx-auto">
		<!-- Section Title -->
		<h2
			class="text-5xl font-bold text-accent tracking-wide text-left leading-tight"
		>
			&lt; Work Experience /&gt;
		</h2>

		<!-- Timeline -->
		<div
			class="relative mt-12 border-l-4 border-accent border-opacity-50 pl-8 space-y-10"
		>
			{#each data.experience as exp, i}
				<div bind:this={itemsRef[i]} class="relative group">
					<!-- Glowing Dot -->
					<div
						class="absolute -left-6 w-5 h-5 bg-accent border-4 border-background rounded-full transition-transform duration-300 group-hover:scale-125"
					></div>

					<!-- Experience Card -->
					<div
						class="bg-primary bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-md border border-accent border-opacity-40 transition-all duration-300 group-hover:scale-[1.02]"
					>
						<h3 class="text-2xl font-semibold text-secondary">{exp.title}</h3>
						<p class="text-md text-accent font-medium">{exp.company}</p>
						<p class="text-sm text-gray-400 mt-1">{exp.duration}</p>
						<p class="text-md text-theme mt-3 leading-relaxed">
							{exp.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
