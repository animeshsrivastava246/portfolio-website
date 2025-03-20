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

	const fetchProjects = async () => {
		await new Promise((res) => setTimeout(res, 100));
		projects = rawData.projects as Project[];
	};

	const initObserver = () => {
		const section = document.getElementById("Projects");
		if (!section) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !isVisible) {
					observer.disconnect();
					showProjects();
				}
			},
			{ threshold: 0.3 }
		);

		observer.observe(section);
	};

	const showProjects = async () => {
		isVisible = true;
		await fetchProjects();

		setTimeout(() => {
			projectRefs.forEach((el) => el && applyTilt(el));
		}, 600);
	};

	onMount(initObserver);
</script>

<section
	id="Projects"
	class="section py-20 px-6 md:px-12"
	style="background-image: url('/assets/backdrops/AboutBanner.avif');"
>
	<div class="max-w-6xl mx-auto text-center">
		<h2>Projects</h2>
		<p class="text-lg text-[var(--text-color)] max-w-2xl mx-auto">
			A curated collection of projects showcasing my expertise in design,
			development, and interactivity.
		</p>

		{#if isVisible}
			<div
				in:fly={{ x: -500, duration: 500 }}
				class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
			>
				{#each projects as project, i}
					<div
						bind:this={projectRefs[i]}
						class="relative backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[var(--accent-color)]/40
						hover:shadow-2xl hover:scale-[1.05] hover:brightness-125 transition-transform duration-300"
						style="background: linear-gradient(to bottom right, var(--primary-color), var(--secondary-color))"
					>
						<div
							class="absolute inset-0 bg-black/10 rounded-2xl pointer-events-none"
						></div>

						<div class="relative z-10 text-left">
							<h3 class="text-2xl font-semibold text-[var(--accent-color)]">
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
		{/if}
	</div>
</section>
