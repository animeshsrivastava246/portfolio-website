<script lang="ts">
	import { onMount } from "svelte";
	import { fadeIn } from "../animations/gsap.ts";
	console.log("test");

	let heroRef: HTMLElement;

	onMount(() => {
		fadeIn(heroRef);
	});

	function scrollToElement(id: string) {
		const element = document.getElementById(id);
		console.log("Trying to scroll to:", id, element); // Debugging

		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		} else {
			console.error("Element NOT found:", id);
		}
	}
</script>

<section
	id="Hero"
	bind:this={heroRef}
	class="min-h-screen flex flex-col items-center justify-center text-center relative"
>
	<!-- Background Animation -->
	<div
		class="absolute inset-0 bg-gradient-to-r from-purple-800 via-blue-600 to-pink-500 opacity-40 -z-10"
	></div>

	<!-- Profile & Heading -->
	<div class="flex w-lvh justify-between text-left">
		<blockquote
			class="flex flex-col max-w-64 text-4xl md:text-6xl font-bold text-white"
		>
			Hello, I build amazing web experiences.
		</blockquote>
		<div class="flex flex-col justify-between items-center">
			<img
				src="/assets/avatars/hero.jpg"
				alt="Avatar Hero"
				loading="lazy"
				class="w-60 h-60 rounded-full border-4 border-primary shadow-lg"
			/>
			<code class="text-4xl md:text-6xl text-white">John Doe</code>
		</div>
	</div>
	<button
		on:click={() => scrollToElement("WorkExperience")}
		class="m-8 inline-block bg-accent text-black p-4 text-lg bg-amber-50 border-1 font-semibold hover:cursor-pointer hover:bg-transparent hover:border-amber-50 hover:text-white transition duration-300 ease-in-out"
	>
		View Projects
	</button>
</section>
