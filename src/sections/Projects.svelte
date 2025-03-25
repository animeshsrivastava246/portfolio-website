<script lang="ts">
	import { onMount } from "svelte";
	import { applyTilt } from "../utils/tilt";
	import { fly } from "svelte/transition";
	import rawData from "../data/data.json";

	type Project = {
		title: string;
		description: string;
		github: string;
		live: string;
	};

	let isVisible = false;
	let projectRefs: HTMLElement[] = [];
	let projects: Project[] = [];
	let projectsRef: HTMLElement;

	// Observe when the section is in the viewport
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !isVisible) {
					isVisible = true;
					observer.disconnect(); // Stop observing after it becomes visible
				}
			},
			{ threshold: 0.3 } // Trigger when 30% of the section is visible
		);

		if (projectsRef) observer.observe(projectsRef);
	});
</script>

<section
	id="Projects"
	bind:this={projectsRef}
	class="section py-20 px-6 md:px-12"
>
	{#if isVisible}
		<div class="max-w-6xl mx-auto text-center">
			<h1 in:fly={{ x: -200, duration: 350 }}>Projects</h1>
			<p in:fly={{ x: 200, duration: 350, delay: 350 }}
				class="text-lg text-[var(--secondary-color)] max-w-2xl mx-auto font-bold drop-shadow-[1px_1px_rgba(0,0,0)]"
			>
				A curated collection of projects showcasing my expertise in design,
				development, and interactivity.
			</p>

			<div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" in:fly={{ x: -200, duration: 350, delay: 1050 }}>
				{#each rawData.projects as project, i}
					<div
						bind:this={projectRefs[i]}
						
						class="relative p-6 rounded-2xl shadow-lg border border-[rgba(var(--accent-color), 0.4)] backdrop-blur-md
					   	hover:shadow-2xl hover:scale-105 hover:brightness-125 transition-transform duration-350
					   	bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)]"
					>
						<div
							class="absolute inset-0 bg-black/10 rounded-2xl pointer-events-none"
						></div>

						<div class="relative z-10 text-left">
							<h3 class="text-2xl font-semibold text-[#f7c5fe]">
								{project.title}
							</h3>
							<p class="mt-3 text-md text-[var(--text-color)] leading-relaxed">
								{project.description}
							</p>

							<div class="mt-6 flex gap-4">
								<button
									onclick={() => window.open(project.github, "_blank")}
									class="btn scale-90"
								>
									GitHub
								</button>
								<button
									onclick={() => window.open(project.live, "_blank")}
									class="btn scale-90"
								>
									Live Demo
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</section>

<style>
	#Projects {
		background-image: url("/assets/backdrops/ProjectsBanner.webp");
	}
</style>
