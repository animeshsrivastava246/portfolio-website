<script lang="ts">
	let isOpen = false;

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
			isOpen = false; // Close mobile menu on click
		}
	};
</script>

<nav
	class="fixed top-4 left-1/2 transform -translate-x-1/2 max-w-3xl md:w-full bg-white/10 backdrop-blur-lg shadow-lg border-2 border-white/30 rounded-[2em] z-50 transition-all duration-300"
>
	<div class="mx-auto px-3 flex justify-between items-center h-16">
		<!-- Logo -->
		<button
			on:click={() => scrollToSection("Hero")}
			class="text-xl font-bold text-white tracking-wide hover:text-accent transition-all whitespace-nowrap"
		>
			&lt; DevPortfolio /&gt;
		</button>

		<!-- Desktop Navigation -->
		<ul class="hidden md:flex space-x-6 mx-auto">
			<li>
				<button
					on:click={() => scrollToSection("About")}
					class="nav-btn text-xl">About</button
				>
			</li>
			<li>
				<button
					on:click={() => scrollToSection("WorkExperience")}
					class="nav-btn text-xl">Works</button
				>
			</li>
			<li>
				<button
					on:click={() => scrollToSection("Projects")}
					class="nav-btn text-xl">Projects</button
				>
			</li>
			<li>
				<button
					on:click={() => scrollToSection("Contact")}
					class="nav-btn text-xl">Contact</button
				>
			</li>
		</ul>

		<!-- Resume Button -->
		<a
			href="/resume.pdf"
			target="_blank"
			class="hidden md:block text-xl px-5 py-2 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all hover:scale-105"
		>
			Resume
		</a>

		<!-- Mobile Menu Button -->
		<button
			class="md:hidden text-white focus:outline-none"
			on:click={() => (isOpen = !isOpen)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
				{#if isOpen}
					<path d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if isOpen}
		<ul class="md:hidden text-white py-4 px-6 space-y-4 text-center rounded-0">
			<button
				on:click={() => scrollToSection("About")}
				class="nav-btn text-xl block w-full">About</button
			>
			<button
				on:click={() => scrollToSection("WorkExperience")}
				class="nav-btn text-xl block w-full">Works</button
			>
			<button
				on:click={() => scrollToSection("Projects")}
				class="nav-btn text-xl block w-full">Projects</button
			>
			<button
				on:click={() => scrollToSection("Contact")}
				class="nav-btn text-xl block w-full">Contact</button
			>
			<a
				href="/resume.pdf"
				target="_blank"
				class="block px-5 text-2xl py-2 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all hover:scale-105"
			>
				Resume
			</a>
		</ul>
	{/if}
</nav>
