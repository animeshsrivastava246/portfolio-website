<script lang="ts">
	import { onMount } from "svelte";
	import gsap from "gsap";

	let cursor: HTMLElement;
	let cursorTrail: HTMLElement;

	// Function to handle mousemove event
	const handleMouseMove = (e: MouseEvent) => {
		// Main cursor moves instantly
		gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });

		// Cursor trail follows with a delay
		gsap.to(cursorTrail, { x: e.clientX, y: e.clientY, duration: 0.35 });
	};

	const handleMouseEnter = () => {
		cursor.classList.add("hover");
		cursorTrail.classList.add("hover");
	};

	const handleMouseLeave = () => {
		cursor.classList.remove("hover");
		cursorTrail.classList.remove("hover");
	};

	onMount(() => {
		// Attach mousemove event
		document.addEventListener("mousemove", handleMouseMove);

		// Hover effects for interactive elements
		const interactiveElements = document.querySelectorAll("a, button");
		interactiveElements.forEach((el) => {
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);
		});

		// Cleanup on component destruction
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			interactiveElements.forEach((el) => {
				el.removeEventListener("mouseenter", handleMouseEnter);
				el.removeEventListener("mouseleave", handleMouseLeave);
			});
		};
	});
</script>

<!-- Main Cursor -->
<div bind:this={cursor} class="cursor"></div>

<!-- Cursor Trail -->
<div bind:this={cursorTrail} class="cursor-trail"></div>

<style>
	/* Global style to hide the default cursor */
	:global(*) {
		cursor: none;
	}

	/* Custom Cursor */
	:global(.cursor),
	:global(.cursor-trail) {
		position: fixed;
		border-radius: 50%;
		pointer-events: none;
		transform: translate(-50%, -50%);
		z-index: 9999;
	}

	/* Main cursor style */
	:global(.cursor) {
		width: 12px;
		height: 12px;
		background-color: var(--text-color);
		transition:
			width 0.2s ease,
			height 0.2s ease,
			background-color 0.3s ease;
	}

	/* Cursor trail style */
	:global(.cursor-trail) {
		width: 16px;
		height: 16px;
		border: 2px solid var(--text-color);
		opacity: 0.5;
	}

	/* Hover effects for cursor and trail */
	:global(.cursor.hover) {
		width: 24px;
		height: 24px;
		background-color: var(--accent-color);
		opacity: 0.7;
	}

	:global(.cursor-trail.hover) {
		width: 32px;
		height: 32px;
		opacity: 0.3;
	}
</style>
