<script lang="ts">
	import { onMount } from "svelte";
	import { applyTilt } from "../utils/tilt";
	import { fly } from "svelte/transition";
	import data from "../data/data.json";
	import { fadeIn } from "../animations/gsap";

	let projectRefs: HTMLElement[] = [];

	onMount(() => {
		projectRefs.forEach((el) => {
			// fadeIn(el);
			fly(el, { y: 500, duration: 500, delay: 1500 });
			applyTilt(el);
		});
	});
</script>

<section
	id="Projects"
	class="section bg-theme py-20 px-6 md:px-12"
>
		<div class="max-w-6xl mx-auto">
			<!-- Section Title -->
			<h2
				class="text-5xl font-bold text-accent tracking-wide text-left leading-tight"
			>
				&lt; Projects /&gt;
			</h2>
			<p class="mt-4 text-lg text-secondary max-w-2xl">
				Explore my latest projects that showcase my skills in building
				efficient, scalable, and visually stunning applications.
			</p>

			<!-- Project Grid -->
			<div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
				{#each data.projects as project, i}
					<div
						bind:this={projectRefs[i]}
						
						class="relative bg-primary bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-accent border-opacity-40
						hover:shadow-accent group"
					>
						<!-- Project Title -->
						<h3 class="text-2xl font-semibold text-secondary">
							{project.title}
						</h3>

						<!-- Description -->
						<p class="mt-3 text-md text-theme leading-relaxed">
							{project.description}
						</p>

						<!-- Buttons -->
						<div class="mt-6 flex gap-4">
							<a
								href={project.github}
								target="_blank"
								class="flex-1 text-center px-4 py-2 rounded-lg font-medium border border-secondary text-secondary
						transition-all duration-300 hover:bg-secondary hover:text-black"
							>
								GitHub
							</a>
							<a
								href={project.live}
								target="_blank"
								class="flex-1 text-center px-4 py-2 rounded-lg font-medium border border-accent text-accent
					transition-all duration-300 hover:bg-accent hover:text-black"
							>
								Live Demo
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
</section>
