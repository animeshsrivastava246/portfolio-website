<script lang="ts">
	import { onMount } from "svelte";
	import { fadeIn } from "../animations/gsap";

	let heroRef: HTMLElement;

	onMount(() => {
		fadeIn(heroRef);
	});
</script>

<section
	id="Hero"
	bind:this={heroRef}
	class="h-screen flex flex-col items-center justify-center text-center relative"
>
	<!-- Background Animation (Can be animated further using GSAP) -->
	<div
		class="absolute inset-0 bg-gradient-to-r from-purple-800 via-blue-600 to-pink-500 opacity-40"
	></div>

	<!-- Profile & Heading -->
	<div class="relative z-10">
		<img
			src="/profile.jpg"
			alt="Profile"
			class="w-28 h-28 rounded-full border-4 border-primary shadow-lg"
		/>
		<h1 class="text-4xl md:text-6xl font-bold text-white mt-4">
			Hello, I'm <span class="text-accent">John Doe</span>
		</h1>
		<p class="text-lg text-gray-300 mt-2">I build amazing web experiences.</p>

		<a
			href="#Projects"
			class="mt-6 inline-block bg-accent text-black px-6 py-3 rounded-md text-lg font-medium"
		>
			View Projects
		</a>
	</div>
</section>
