<script lang="ts">
	import { onMount } from "svelte";
	import { fadeIn } from "../animations/gsap";
	import { applyTilt } from "../utils/tilt";
	import data from "../data/data.json";

	let timelineRef: HTMLElement;
	let itemsRef: HTMLElement[] = [];

	let experiences = data.experience.map((item) => ({
		title: item.title,
		company: item.company,
		duration: item.duration,
		description: item.description,
	}));

	onMount(() => {
		fadeIn(timelineRef);
		itemsRef.forEach((el) => {
			fadeIn(el);
			applyTilt(el);
		});
	});
</script>

<section id="WorkExperience" bind:this={timelineRef} class="section bg-primary">
	<h2 class="text-3xl font-bold">&lt; Work Experience /&gt;</h2>

	<div class="relative mt-10 max-w-3xl mx-auto">
		<div
			class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"
		></div>

		{#each experiences as exp, i}
			<div
				bind:this={itemsRef[i]}
				class="relative flex items-center mb-10"
				class:justify-start={i % 2 === 0}
				class:justify-end={i % 2 !== 0}
			>
				<div
					class="bg-white text-black p-6 rounded-lg shadow-lg w-64 transition-transform duration-300 hover:shadow-xl"
				>
					<h3 class="text-xl font-bold">{exp.title}</h3>
					<p class="text-sm text-gray-600">{exp.company}</p>
					<p class="text-sm font-medium mt-1">{exp.duration}</p>
					<p class="text-sm mt-2">{exp.description}</p>
				</div>
				<div
					class="w-4 h-4 bg-red-500 rounded-full absolute left-1/2 transform -translate-x-1/2"
				></div>
			</div>
		{/each}
	</div>
</section>
