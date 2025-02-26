<script lang="ts">
	import { onMount } from "svelte";
	import { fadeIn } from "../animations/gsap";
	import { applyTilt } from "../utils/tilt";

	let projectRefs: HTMLElement[] = [];

	let projects = [
		{
			title: "Portfolio Website",
			description: "Built with Astro, Svelte, Tailwind, and GSAP animations.",
			github: "https://github.com/yourrepo",
			live: "https://yourportfolio.com",
		},
		{
			title: "E-commerce App",
			description: "Full-stack application with Firebase backend.",
			github: "https://github.com/yourecommerce",
			live: "https://ecommerce.com",
		},
		{
			title: "AI Chatbot",
			description: "Built with OpenAI API for intelligent conversations.",
			github: "https://github.com/yourchatbot",
			live: "https://chatbot.com",
		},
	];

	onMount(() => {
		projectRefs.forEach((el) => {
			fadeIn(el);
			applyTilt(el);
		});
	});
</script>

<section id="Projects" class="section bg-secondary">
	<h2 class="text-3xl font-bold">&lt; Projects /&gt;</h2>
	<p class="mt-4 text-lg max-w-2xl mx-auto">
		Here are some of my latest projects showcasing my skills and experience.
	</p>

	<div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
		{#each projects as project, i}
			<div
				bind:this={projectRefs[i]}
				class="relative bg-gradient-to-br from-purple-600 to-pink-500 p-6 rounded-xl shadow-xl transition-transform duration-300 hover:shadow-2xl"
			>
				<h3 class="text-xl font-bold">{project.title}</h3>
				<p class="mt-2 text-sm">{project.description}</p>

				<div class="mt-4 flex justify-between">
					<a
						href={project.github}
						target="_blank"
						class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
					>
						GitHub
					</a>
					<a
						href={project.live}
						target="_blank"
						class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
					>
						Live Demo
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>
