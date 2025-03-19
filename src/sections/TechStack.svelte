<script lang="ts">
	import data from "../data/data.json"; // Importing the data

	// Extracting both names and paths from the skillsList
	const loadedSvgs = data.skillsList;
</script>

<aside id="TechStack" class="relative py-16 overflow-hidden w-full">
	<!-- Infinite Scrolling Logos -->
	<div class="relative w-full flex overflow-hidden">
		<!-- Duplicate content for seamless looping -->
		<div class="flex whitespace-nowrap animate-scroll py-4">
			{#each [...loadedSvgs, ...loadedSvgs] as { name, path }}
				<div
					class="flex flex-col items-center p-4 opacity-60 transition-transform duration-300 hover:scale-110 hover:opacity-100"
				>
					<img src={path} alt={name} class="h-16 md:h-20 lg:h-24" />
					<span class="text-md font-semibold text-secondary mt-6"
						>{name.replace(".svg", "").replace("-", " ")}</span
					>
				</div>
			{/each}
		</div>
	</div>
</aside>

<style>
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
		will-change: transform;
	}
	.animate-scroll:hover {
		animation-play-state: paused;
	}
	.animate-scroll img {
		filter: drop-shadow(1px 1px 10px var(--secondary-color));
	}
</style>
