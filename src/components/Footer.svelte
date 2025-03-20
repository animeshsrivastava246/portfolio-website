<script lang="ts">
	import data from "../data/data.json";

	// Social links & sections from data.json
	const socialLinks = data.socialLinks;
	const sections = data.sections;

	// Smooth scroll function
	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};
</script>

<footer
	class="relative w-full py-10 bg-black/80 backdrop-blur-lg border-t border-white/20 overflow-hidden"
>
	<!-- Background Glow Animation -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] opacity-20 blur-[100px] -z-10 animate-pulse"
	></div>

	<!-- Animated Glowing Border -->
	<div
		class="absolute top-0 left-0 w-full h-[2px] bg-[var(--accent-color)] blur-sm animate-glow"
	></div>

	<!-- Footer Content -->
	<div
		class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-secondary/80"
	>
		<!-- Left Side: Logo & Copyright -->
		<div class="flex flex-col items-center md:items-start">
			<a href="/" class="flex items-center gap-3 group">
				<img
					src="/assets/logos/logo.svg"
					alt={data.info.name}
					class="w-12 h-12 object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
				/>
				<span
					class="text-xl font-bold text-[var(--accent-color)] group-hover:text-secondary transition"
					>{data.info.name}</span
				>
			</a>
			<p class="text-sm md:text-base font-medium mt-2 opacity-80">
				&copy; {new Date().getFullYear()}
				{data.info.name}. All rights reserved.
			</p>
		</div>

		<!-- Middle: Section Links -->
		<!-- Section Links -->
		<div class="flex flex-wrap justify-center gap-6 mt-6 md:mt-0">
			{#each sections.filter((section) => section.name !== "Home") as section}
				<button
					on:click={() => scrollToSection(section.id)}
					class="text-secondary/80 hover:text-[var(--accent-color)] text-sm font-medium transition duration-300 hover:scale-105"
				>
					{section.name}
				</button>
			{/each}
		</div>

		<!-- Right Side: Social Icons -->
		<div class="flex gap-4 mt-6 md:mt-0">
			{#each socialLinks as link}
				<a
					href={link.url}
					target="_blank"
					class="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20
					transition-all duration-300 hover:scale-125 hover:shadow-[0_0_15px_var(--accent-color)] hover:bg-[var(--accent-color)]"
				>
					<img
						src={link.icon}
						alt={link.name}
						class="w-7 h-7 transition-all duration-300 hover:invert"
					/>
				</a>
			{/each}
		</div>
	</div>
</footer>

<style>
	@keyframes glow {
		0% {
			opacity: 0.33;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.66;
		}
	}
	.animate-glow {
		animation: glow 5s infinite alternate ease-in-out;
	}
	footer {
		scroll-snap-align: end;
	}
</style>
