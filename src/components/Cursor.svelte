<script lang="ts">
	import { onMount } from "svelte";
	import gsap from "gsap";

	let cursor: HTMLElement;
	let cursorTrail: HTMLElement;

	onMount(() => {
		document.addEventListener("mousemove", (e) => {
			// Main cursor moves instantly
			gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });

			// Cursor trail follows with a delay
			gsap.to(cursorTrail, { x: e.clientX, y: e.clientY, duration: 0.2 });
		});

		// Hover effects for interactive elements
		const interactiveElements = document.querySelectorAll("a, button");
		interactiveElements.forEach((el) => {
			el.addEventListener("mouseenter", () => {
				cursor.classList.add("hover");
				cursorTrail.classList.add("hover");
			});
			el.addEventListener("mouseleave", () => {
				cursor.classList.remove("hover");
				cursorTrail.classList.remove("hover");
			});
		});
	});
</script>

<!-- Main Cursor -->
<div bind:this={cursor} class="cursor"></div>
<!-- Cursor Trail -->
<div bind:this={cursorTrail} class="cursor-trail"></div>
