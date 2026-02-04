<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import data from "../data/data.json";

	let aboutRef: HTMLElement;
	let visible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.3 },
		);

		if (aboutRef) observer.observe(aboutRef);
	});

	const skills = Object.entries(data.skills).map(([title, icon]) => ({
		title,
		icon,
	}));

	const loadedSvgs = data.skillsList;
</script>

<section
	id="About"
	bind:this={aboutRef}
	class="section text-theme py-20 px-6 md:px-12"
>
	{#if visible}
		<div class="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
			<!-- About text -->
			<div in:fly={{ x: -200, duration: 350 }} class="md:w-1/2">
				<h1>About Me</h1>
				<p class="mt-6 text-lg text-gray-800 font-bold leading-relaxed">
					I'm a software developer engineer focused on building scalable,
					efficient, and maintainable systems. I care about correctness,
					performance, and clean abstractions more than flashy tricks.
					<br /><br />
					My work spans full-stack web and app development, with a strong emphasis
					on modern tooling, animation discipline, and UX that serves function instead
					of ego.
				</p>
			</div>

			<!-- Skills grid -->
			<div
				in:fly={{ x: 200, duration: 350, delay: 350 }}
				class="grid grid-cols-2 sm:grid-cols-3 gap-6 md:w-1/2"
			>
				{#each skills as skill}
					<div class="skill-card">
						<div class="icon-wrap">
							<img src={skill.icon} alt={skill.title} loading="lazy" />
						</div>
						<h2>{skill.title}</h2>
					</div>
				{/each}
			</div>
		</div>

		<!-- Infinite scrolling stack -->
		<aside
			in:fly={{ y: -400, duration: 700, delay: 1050 }}
			class="stack-strip"
			aria-label="Technology stack"
		>
			<div class="stack-mask">
				<div class="stack-track">
					{#each [...loadedSvgs, ...loadedSvgs] as { name, path }}
						<div class="stack-item">
							<img
								src={path}
								alt={name.replace(".svg", "").replaceAll("-", " ")}
								loading="lazy"
							/>
							<span>
								{name.replace(".svg", "").replaceAll("-", " ")}
							</span>
						</div>
					{/each}
				</div>
			</div>
		</aside>
	{/if}
</section>

<style>
	#About {
		background-image: url("/assets/backdrops/AboutBanner.webp");
		background-size: cover;
		background-position: center;
	}

	/* ===== Skill cards ===== */

	.skill-card {
		position: relative;
		background: rgba(0, 0, 0, 0.3);
		padding: 1rem;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease,
			background 0.25s ease;
	}

	.skill-card:hover {
		transform: translateY(-6px) scale(1.05);
		background: rgba(0, 0, 0, 0.5);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
	}

	.icon-wrap {
		width: 4rem;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.75rem;
		background: rgba(255, 255, 255, 0.2);
	}

	.icon-wrap img {
		width: 2.5rem;
		height: 2.5rem;
		filter: drop-shadow(2px 2px 10px var(--accent-color));
	}

	.skill-card h2 {
		font-size: 1.1rem;
		font-weight: 700;
		color: white;
		text-align: center;
	}

	/* ===== Infinite scroll ===== */

	.stack-strip {
		margin-top: 1rem;
		width: 100%;
	}

	.stack-mask {
		overflow: hidden;
		width: 100%;
	}

	.stack-track {
		display: flex;
		gap: 2rem;
		width: max-content;
		animation: scroll-x 180s linear infinite;
		will-change: transform;
	}

	.stack-track:hover {
		animation-play-state: paused;
	}

	.stack-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		opacity: 0.85;
		transition:
			transform 0.25s ease,
			opacity 0.25s ease;
	}

	.stack-item:hover {
		transform: translateY(-4px) scale(1.05);
		opacity: 1;
	}

	.stack-item img {
		height: 4rem;
		filter: drop-shadow(2px 2px 10px var(--secondary-color));
	}

	.stack-item span {
		margin-top: 1rem;
		font-weight: 600;
		color: rgb(55, 65, 81);
		text-transform: capitalize;
	}

	@keyframes scroll-x {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.stack-track {
			animation: none;
			transform: translateX(0);
		}
	}
</style>
