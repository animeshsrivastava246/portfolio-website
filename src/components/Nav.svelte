<script lang="ts">
	import { onMount } from "svelte";

	let sections = ["Hero", "About", "Work", "Projects", "Connect"];
	let activeSection = "Hero";

	// Smooth scroll on click
	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		activeSection = id;
	};

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{ threshold: 0.6 } // Detect when 60% of section is visible
		);

		sections.forEach((section) => {
			let el = document.getElementById(section);
			if (el) observer.observe(el);
		});
	});
</script>

<nav
	class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex gap-6 items-center"
>
	{#each sections as section}
		<button
			on:click={() => scrollToSection(section)}
			class="text-sm font-medium px-3 py-1 rounded-full transition-all duration-300"
			class:text-primary={activeSection === section}
		>
			{section}
		</button>
	{/each}
	<a
		href="/resume.pdf"
		target="_blank"
		class="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold"
	>
		Resume
	</a>
</nav>
