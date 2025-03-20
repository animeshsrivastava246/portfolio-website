<script lang="ts">
	import TechStack from "./TechStack.svelte";
	import { onMount } from "svelte";
	import { fadeIn } from "../animations/gsap";
	import data from "../data/data.json";

	let aboutRef: HTMLElement;
	let cardsRef: HTMLElement[] = [];

	onMount(() => {
		fadeIn(aboutRef);
		cardsRef.forEach((el) => fadeIn(el));
	});

	let skills = Object.entries(data.skills).map(([title, icon]) => ({
		title,
		icon,
	}));
</script>

<section
	id="About"
	bind:this={aboutRef}
	class="section text-theme py-20 px-6 md:px-12"
	style="background-image: url('/assets/backdrops/AboutBanner.webp');"
>
	<div class="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
		<!-- Left Side: About Text -->
		<div class="md:w-1/2">
			<h2>About Me</h2>
			<p class="mt-6 text-lg text-secondary leading-relaxed">
				I'm a software engineer passionate about crafting high-quality,
				scalable, and efficient applications. I thrive on solving complex
				problems and designing user-centric interfaces that blend functionality
				with aesthetics.
			</p>
			<p class="mt-4 text-lg text-secondary leading-relaxed">
				With expertise in full-stack development, I enjoy creating seamless
				digital experiences using modern web technologies and interactive
				animations.
			</p>
		</div>

		<!-- Right Side: Skills Grid -->
		<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 md:w-1/2">
			{#each skills as skill, i}
				<div
					bind:this={cardsRef[i]}
					class="relative bg-primary p-4 rounded-2xl shadow-lg flex flex-col items-center gap-3
					transition-all duration-300 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-2"
				>
					<div
						class="relative w-16 h-16 flex items-center justify-center rounded-xl bg-white bg-opacity-10 shadow-md"
					>
						<img src={skill.icon} alt={skill.title} class="w-10 h-10" />
					</div>
					<h3
						class="text-lg font-semibold text-theme text-center tracking-wide"
					>
						{skill.title}
					</h3>
					<div class="absolute inset-0 bg-white opacity-5 rounded-2xl"></div>
				</div>
			{/each}
		</div>
	</div>
	<TechStack />
</section>
