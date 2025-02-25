<script lang="ts">
	import { onMount } from "svelte";
	import { fly, fade } from "svelte/transition";
	import ThemeToggle from "./ThemeToggle.svelte";

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
	let isMobileMenuOpen = false; // to toggle mobile menu

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<nav
		in:fly={{ y: -100, duration: 500 }}
		class="fixed top-4 left-1/2 w-full max-w-3xl transform -translate-x-[50%]
		bg-white/10 backdrop-blur-2xl shadow-lg border-2 border-white/30
		rounded-[2em] z-100"
	>
		<div class="mx-auto px-3 flex justify-between items-center h-16">
			<!-- Logo -->
			<button onclick={() => scrollToSection("Hero")} class="cursor-pointer">
				<img
					src="assets/logos/logo.svg"
					alt="Logo"
					class="w-10 h-10 rounded-full"
				/>
			</button>
			<ThemeToggle />

			<!-- Desktop Navigation -->
			<ul class="hidden md:flex space-x-6 mx-auto">
				{#each menuItems as item}
					<li>
						<button
							onclick={() => scrollToSection(item.id)}
							class="text-xl hover:text-black rounded-full cursor-pointer
							transition-all duration-300"
						>
							{item.name}
						</button>
					</li>
				{/each}
			</ul>

			<!-- Mobile Hamburger Button -->
			<button
				class="md:hidden"
				onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
			>
				{#if isMobileMenuOpen}
					<!-- X icon -->
					<svg
						in:fly={{ y: -50, duration: 350 }}
						out:fade={{ duration: 350 }}
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
					>
						<line
							x1="8"
							y1="8"
							x2="32"
							y2="32"
							stroke="white"
							stroke-width="3"
							stroke-linecap="round"
						/>
						<line
							x1="8"
							y1="32"
							x2="32"
							y2="16"
							stroke="white"
							stroke-width="3"
							stroke-linecap="round"
						/>
					</svg>
				{:else}
					<!-- Hamburger icon -->
					<svg
						in:fly={{ y: -50, duration: 350 }}
						out:fade={{ duration: 350 }}
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
					>
						<line
							x1="8"
							y1="10"
							x2="32"
							y2="10"
							stroke="white"
							stroke-width="3"
							stroke-linecap="round"
						/>
						<line
							x1="8"
							y1="20"
							x2="32"
							y2="20"
							stroke="white"
							stroke-width="3"
							stroke-linecap="round"
						/>
						<line
							x1="8"
							y1="30"
							x2="32"
							y2="30"
							stroke="white"
							stroke-width="3"
							stroke-linecap="round"
						/>
					</svg>
				{/if}
			</button>

			<!-- Resume Button -->
			<a
				href="/resume.pdf"
				target="_blank"
				class="btn"
			>
				Resume
			</a>
		</div>
	</nav>
{/if}

<!-- Mobile Menu -->
{#if isMobileMenuOpen}
	<!-- fixed top-4 left-1/2 w-full max-w-3xl transform -translate-x-[50%]
	bg-white/10 backdrop-blur-lg shadow-lg border-2 border-white/30
	rounded-[2em] z-100 -->
	<nav
		class="md:hidden fixed top-22 left-1/2 w-full transform -translate-x-[50%]
			bg-white/10 backdrop-blur-2xl shadow-lg border-2 border-white/30
			rounded-[2em] z-100"
		in:fly={{ y: -200, duration: 500 }}
		out:fly={{ y: -200, duration: 500 }}
	>
		<ul class="flex flex-col space-y-4 p-6 justify-center items-center">
			{#each menuItems as item}
				<li>
					<button
						onclick={() => {
							scrollToSection(item.id);
							isMobileMenuOpen = false; // close menu after click
						}}
						class="text-xl text-white hover:text-black rounded-full cursor-pointer
							transition-all duration-500"
					>
						{item.name}
					</button>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
