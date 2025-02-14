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
	class="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md z-50"
>
	<div class="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
		<a href="#" class="text-xl font-bold text-white">&lt; DevPortfolio /&gt;</a>

		<!-- Desktop Nav -->
		<div class="hidden md:flex space-x-6">
			<a
				on:click={() => scrollToSection("Hero")}
				class="cursor-pointer text-white hover:text-gray-400">Home</a
			>
			<a
				on:click={() => scrollToSection("About")}
				class="cursor-pointer text-white hover:text-gray-400">About</a
			>
			<a
				on:click={() => scrollToSection("WorkExperience")}
				class="cursor-pointer text-white hover:text-gray-400">Experience</a
			>
			<a
				on:click={() => scrollToSection("Projects")}
				class="cursor-pointer text-white hover:text-gray-400">Projects</a
			>
			<a
				on:click={() => scrollToSection("Contact")}
				class="cursor-pointer text-white hover:text-gray-400">Contact</a
			>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="md:hidden text-white focus:outline-none"
			on:click={() => (isOpen = !isOpen)}
		>
			☰
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if isOpen}
		<div
			class="md:hidden bg-black bg-opacity-90 text-white py-4 px-6 space-y-4"
		>
			<a on:click={() => scrollToSection("Hero")} class="block cursor-pointer"
				>Home</a
			>
			<a on:click={() => scrollToSection("About")} class="block cursor-pointer"
				>About</a
			>
			<a
				on:click={() => scrollToSection("WorkExperience")}
				class="block cursor-pointer">Experience</a
			>
			<a
				on:click={() => scrollToSection("Projects")}
				class="block cursor-pointer">Projects</a
			>
			<a
				on:click={() => scrollToSection("Contact")}
				class="block cursor-pointer">Contact</a
			>
		</div>
	{/if}
</nav>
