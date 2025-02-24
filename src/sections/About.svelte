<script lang="ts">
	import { onMount } from "svelte";
	import { fadeIn } from "../animations/gsap";

	let aboutRef: HTMLElement;
	let cardsRef: HTMLElement[] = [];

	onMount(() => {
		fadeIn(aboutRef);
		cardsRef.forEach((el) => fadeIn(el));
	});

	let skills = [
		{ title: "Problem Solving", icon: "/assets/logos/svg/JavaScript.svg" },
		{ title: "Frontend Development", icon: "/assets/logos/svg/TypeScript.svg" },
		{ title: "Backend Development", icon: "/assets/logos/svg/Java.svg" },
		{ title: "System Design", icon: "/assets/logos/svg/MongoDB.svg" },
	];
</script>

<section
	id="About"
	bind:this={aboutRef}
	class="py-20 text-center bg-pent text-white"
>
	<h2 class="text-3xl font-bold">&lt; About /&gt;</h2>
	<p class="mt-4 text-lg max-w-2xl mx-auto">
		I'm a software engineer passionate about building high-quality, scalable,
		and efficient applications. I enjoy solving complex problems and crafting
		user-friendly experiences.
	</p>

	<div class="mt-8 flex flex-wrap justify-center gap-6">
		{#each skills as skill, i}
			<div
				bind:this={cardsRef[i]}
				class="bg-purple-600 px-6 py-4 rounded-lg shadow-md w-44"
			>
				<img src={skill.icon} alt={skill.title} class="w-10 h-10 mx-auto" />
				<h3 class="text-lg mt-2">{skill.title}</h3>
			</div>
		{/each}
	</div>
</section>
