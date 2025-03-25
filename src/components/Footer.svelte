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

<footer class="relative w-full py-10 bg-theme backdrop-blur-lg overflow-hidden">
	<!-- Footer Content -->
	<div
		class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-secondary"
	>
		<!-- Left Side: Logo & Copyright -->
		<div class="flex flex-col items-center md:items-start">
			<button
				on:click={() => scrollToSection("Hero")}
				class="flex items-center gap-3 group hover:scale-105 duration-350"
			>
				<img
					src="assets/logos/logo.svg"
					alt="Logo"
					class="w-10 h-10 rounded-full"
				/>
				<span
					class="text-xl font-bold text-[var(--accent-color)] group-hover:text-secondary transition"
					>{data.info.name}</span
				>
			</button>
			<p class="text-sm md:text-base font-medium mt-2 opacity-80">
				&copy; {new Date().getFullYear()} All rights reserved.
			</p>
		</div>

		<!-- Middle: Section Links -->
		<!-- Section Links -->
		<div class="flex flex-wrap justify-center gap-6 mt-6 md:mt-0">
			{#each sections.filter((section) => section.name !== "Home") as section}
				<button
					on:click={() => scrollToSection(section.id)}
					class="text-secondary hover:text-[var(--accent-color)] text-md font-medium duration-350 hover:scale-105 hover:font-extrabold"
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
					transition-all duration-350 hover:scale-125 hover:shadow-[0_0_15px_var(--accent-color)] hover:bg-[var(--accent-color)]"
				>
					<img
						src={link.icon}
						alt={link.name}
						class="w-7 h-7 transition-all duration-350 hover:invert"
					/>
				</a>
			{/each}
		</div>
	</div>
</footer>

<style>
	footer {
		scroll-snap-align: end;
	}
</style>
