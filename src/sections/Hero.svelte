<script lang="ts">
	import { onMount } from "svelte";
	import { fadeIn } from "../animations/gsap";

	let heroRef: HTMLElement;

	onMount(() => {
		fadeIn(heroRef);
	});

	function scrollToElement(id: string) {
		const element = document.getElementById(id);
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
	class="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
>
	<!-- Background Gradient -->
	<div
		class="absolute inset-0 bg-gradient-to-r from-purple-800 via-blue-600 to-pink-500 opacity-40 -z-10"
	></div>

	<!-- Content -->
	<div
		class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-3/4 mx-auto"
	>
		<!-- Left Side: Image & Name -->
		<div class="flex flex-col items-center space-y-4">
			<img
				src="/assets/avatars/hero.jpg"
				alt="Avatar Hero"
				loading="lazy"
				class="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-primary shadow-lg"
			/>
			<code class="text-3xl md:text-4xl text-white font-semibold">John Doe</code
			>
		</div>

		<!-- Right Side: Text -->
		<blockquote
			class="text-4xl md:text-6xl font-bold text-white text-left leading-tight"
		>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit.
		</blockquote>
	</div>

	<!-- Scroll Button (Fixed at Bottom) -->
	<button
		on:click={() => scrollToElement("WorkExperience")}
		class="absolute cursor-pointer bottom-10 left-1/2 transform -translate-x-1/2 bg-accent p-3 text-lg
	  border-2 border-amber-50 font-semibold rounded-full hover:bg-white hover:border-amber-50
	  hover:text-black hover:scale-95 transition duration-300 ease-in-out"
	>
		View Projects &#x21E9;
	</button>
</section>
