<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	const menuItems = [
		{ name: "About", id: "About" },
		{ name: "Works", id: "WorkExperience" },
		{ name: "Projects", id: "Projects" },
		{ name: "Contact", id: "Contact" },
	];

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>
{#if visible}
<nav
	in:fly={{ y: 100, duration: 2000 }}
	class="fixed top-4 left-1/2 w-full max-w-3xl
	bg-white/10 backdrop-blur-lg shadow-lg border-2 border-white/30
	rounded-[2em] z-100 transition-all duration-300"
	style="transform: translateX(-50%);" 
>
	<div class="mx-auto px-3 flex justify-between items-center h-16">
		<!-- Logo -->
		<button
			on:click={() => scrollToSection("Hero")}
			class="text-xl cursor-pointer font-bold text-white tracking-wide
			hover:text-accent transition-all whitespace-nowrap"
		>
			&lt; DevPortfolio /&gt;
		</button>

		<!-- Desktop Navigation -->
		<ul class="flex space-x-6 mx-auto">
			{#each menuItems as item}
				<li>
					<button
						on:click={() => scrollToSection(item.id)}
						class="text-xl hover:text-black rounded-full cursor-pointer
						transition-all duration-300"
					>
						{item.name}
					</button>
				</li>
			{/each}
		</ul>
		<!-- Resume Button -->
		<a
			href="/resume.pdf"
			target="_blank"
			class="text-xl px-5 py-2 border-2 border-white/50 text-white font-semibold
			rounded-full hover:bg-white hover:text-black hover:scale-95 transition-all duration-300"
		>
			Resume
		</a>
	</div>
</nav>
{/if}
