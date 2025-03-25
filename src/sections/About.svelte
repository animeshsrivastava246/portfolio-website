<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import data from "../data/data.json";

	let aboutRef: HTMLElement;
	let cardsRef: HTMLElement[] = [];
	let visible = false;

	// Set visible to true on mount for transitions
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !visible) {
					visible = true;
					observer.disconnect(); // Stop observing after it becomes visible
				}
			},
			{ threshold: 0.3 } // Trigger when 30% of the section is visible
		);

		if (aboutRef) observer.observe(aboutRef);
	});

	// Extract skills
	let skills = Object.entries(data.skills).map(([title, icon]) => ({
		title,
		icon,
	}));

	// Extract SVGs for scrolling animation
	const loadedSvgs = data.skillsList;
</script>

<section
	id="About"
	bind:this={aboutRef}
	class="section text-theme py-20 px-6 md:px-12"
>
	{#if visible}
		<div class="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
			<!-- Left Side: About Text -->
			<div in:fly={{ x: -200, duration: 350 }} class="md:w-1/2">
				<h1>About Me</h1>
				<p class="mt-6 text-lg text-secondary leading-relaxed">
					I'm a software engineer passionate about crafting high-quality,
					scalable, and efficient applications. I thrive on solving complex
					problems and designing user-centric interfaces that blend
					functionality with aesthetics.
				</p>
				<p class="mt-4 text-lg text-secondary leading-relaxed">
					With expertise in full-stack development, I enjoy creating seamless
					digital experiences using modern web technologies and interactive
					animations.
				</p>
			</div>

			<!-- Right Side: Skills Grid -->
			<div
				in:fly={{ x: 200, duration: 350, delay: 350 }}
				class="grid grid-cols-2 sm:grid-cols-3 gap-6 md:w-1/2"
			>
				{#each skills as skill, i}
					<div
						bind:this={cardsRef[i]}
						class="relative bg-black/30 p-4 rounded-2xl shadow-lg flex flex-col items-center gap-3
						transition-all duration-350 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-2 hover:bg-black/50"
					>
						<div
							class="relative w-16 h-16 flex items-center justify-center rounded-xl bg-white/80 shadow-md"
						>
							<img src={skill.icon} alt={skill.title} class="w-10 h-10" />
						</div>
						<h2
							class="text-lg font-semibold text-white text-center tracking-wide"
						>
							{skill.title}
						</h2>
						<div class="absolute inset-0 bg-white opacity-5 rounded-2xl"></div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Infinite Scrolling Logos -->
		<aside
			in:fly={{ y: -200, duration: 350, delay: 1050 }}
			class="relative py-16 overflow-hidden w-[99vw] flex"
		>
			<!-- Duplicate content for seamless looping -->
			<div class="flex whitespace-nowrap animate-scroll py-4">
				{#each [...loadedSvgs, ...loadedSvgs] as { name, path }}
					<div
						class="flex flex-col items-center p-4 opacity-80 hover:scale-105 hover:opacity-100 transition-all duration-350"
					>
						<img src={path} alt={name} class="h-16 md:h-20 lg:h-24" />
						<span class="text-md font-semibold text-white mt-6">
							{name.replace(".svg", "").replace("-", " ")}
						</span>
					</div>
				{/each}
			</div>
		</aside>
	{/if}
</section>

<style>
	#About {
		background-image: url("/assets/backdrops/AboutBanner.webp");
	}

	/* Infinite Scroll Animation */
	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	.animate-scroll {
		display: flex;
		gap: 2rem;
		animation: scroll 350s linear infinite;
		transition: all 0.35s ease-in-out;
	}
	.animate-scroll:hover {
		animation-play-state: paused;
	}
	.animate-scroll img {
		filter: drop-shadow(1px 1px 10px var(--secondary-color));
	}
</style>
