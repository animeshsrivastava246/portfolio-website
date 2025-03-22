<script lang="ts">
	import { onMount } from "svelte";
	import { fly, fade } from "svelte/transition";

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
	let isMobileMenuOpen = false;

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<nav
		in:fly={{ y: -100, duration: 500 }}
		class="fixed top-4 left-1/2 w-full max-w-3xl transform -translate-x-[50%]
		bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20
		rounded-[2em] z-50"
	>
		<div class="mx-auto px-3 flex justify-between items-center h-16">
			<!-- Logo -->
			<button on:click={() => scrollToSection("Hero")}>
				<img
					src="assets/logos/logo.svg"
					alt="Logo"
					class="w-10 h-10 rounded-full hover:scale-105 duration-350"
				/>
			</button>

			<!-- Resume Button -->
			<a
				href="/resume.pdf"
				target="_blank"
				class="btn bg-[var(--primary-color)] text-white px-5 py-2 rounded-full shadow-lg
				hover:scale-105 hover:shadow-[0_0_12px_var(--accent-color)] transition-all duration-350"
			>
				Resume
			</a>

			<!-- Mobile Hamburger Button -->
			<button
				class="md:hidden text-white"
				on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
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
							y2="8"
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

			<!-- Desktop Navigation -->
			<ul class="hidden md:flex space-x-6 mx-4">
				{#each menuItems as item}
					<li>
						<button
							on:click={() => scrollToSection(item.id)}
							class="text-theme text-lg font-medium p-2 rounded-full transition-all duration-350 hover:shadow-[0_0_8px_var(--accent-color)] hover:scale-105"
						>
							{item.name}
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
{/if}

<!-- Mobile Menu -->
{#if isMobileMenuOpen}
	<nav
		class="md:hidden fixed top-25 left-1/2 w-full transform -translate-x-[50%]
			bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20
			rounded-[2em] z-50"
		in:fly={{ y: -200, duration: 500 }}
		out:fly={{ y: -200, duration: 500 }}
	>
		<ul class="flex flex-col space-y-4 p-4 justify-center items-center">
			{#each menuItems as item}
				<li>
					<button
						on:click={() => {
							scrollToSection(item.id);
							isMobileMenuOpen = false;
						}}
						class="text-white p-4 rounded-full shadow-lg font-bold
						hover:scale-105 hover:shadow-[0_0_12px_var(--accent-color)] transition-all duration-350"
					>
						{item.name}
					</button>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
