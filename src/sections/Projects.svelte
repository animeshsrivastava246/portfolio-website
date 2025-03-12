<script lang="ts">
	import { onMount } from "svelte";
	import { applyTilt } from "../utils/tilt";
	import { fly } from "svelte/transition";
	import data from "../data/data.json";

	let projectRefs: HTMLElement[] = [];
	let visible = false; // ✅ Controls the animation state

	onMount(() => {
		visible = true; // ✅ Triggers animation
		projectRefs.forEach((el) => applyTilt(el)); // ✅ Apply tilt effect once
	});
</script>

<section id="Projects" class="section bg-theme py-20 px-6 md:px-12">
	<div class="max-w-6xl mx-auto">
		<!-- Section Title -->
		<h2
			class="text-5xl font-bold text-accent tracking-wide text-left leading-tight"
		>
			&lt; Projects /&gt;
		</h2>
		<p class="mt-4 text-lg text-secondary max-w-2xl">
			Explore my latest projects that showcase my skills in building efficient,
			scalable, and visually stunning applications.
		</p>

		<!-- Project Grid -->
		<div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
			{#if visible}
				{#each data.projects as project, i}
					<div
						bind:this={projectRefs[i]}
						in:fly={{ y: 500, duration: 500, delay: i * 100 }}
						class="relative bg-primary bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-accent border-opacity-40
						hover:scale-[1.03] hover:shadow-accent transition-transform duration-300 group"
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
			{/if}
		</div>
	</div>
</section>
