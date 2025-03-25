<script lang="ts">
	import { onMount } from "svelte";

	let cursor: HTMLElement;
	let cursorTrail: HTMLElement;
	let idleTimeout: NodeJS.Timeout;
	let isTouchDevice = false;

	// Detect if it's a touch device
	const checkTouchDevice = () => {
		isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
	};

	// Function to handle mouse movement
	const handleMouseMove = (e: MouseEvent) => {
		if (isTouchDevice) return;

		// Show cursor on movement
		cursor.style.opacity = "1";
		cursorTrail.style.opacity = "1";

		// Reset idle timer
		resetIdleTimer();

		// Move cursor instantly
		cursor.style.left = `${e.clientX}px`;
		cursor.style.top = `${e.clientY}px`;

		// Cursor trail follows smoothly
		cursorTrail.style.transition = "transform 0.2s ease-out";
		cursorTrail.style.left = `${e.clientX}px`;
		cursorTrail.style.top = `${e.clientY}px`;
	};

	// Function to hide cursor when idle
	const hideCursor = () => {
		if (isTouchDevice) return;
		cursor.style.opacity = "0";
		cursorTrail.style.opacity = "0";
	};

	// Reset idle timer
	const resetIdleTimer = () => {
		if (isTouchDevice) return;
		clearTimeout(idleTimeout);
		idleTimeout = setTimeout(hideCursor, 1500); // Hide after 1.5s of inactivity
	};

	const handleMouseEnter = () => {
		if (isTouchDevice) return;
		cursor.classList.add("hover");
		cursorTrail.classList.add("hover");
	};

	const handleMouseLeave = () => {
		if (isTouchDevice) return;
		cursor.classList.remove("hover");
		cursorTrail.classList.remove("hover");
	};

	onMount(() => {
		checkTouchDevice();

		// Initially hide the cursor
		cursor.style.opacity = "0";
		cursorTrail.style.opacity = "0";

		if (!isTouchDevice) {
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseleave", hideCursor);
		}

		// Hover effects for interactive elements
		const interactiveElements = document.querySelectorAll("a, button, .hover-target");
		interactiveElements.forEach((el) => {
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);
		});

		// Start idle timer
		resetIdleTimer();

		// Cleanup on component destruction
		return () => {
			if (!isTouchDevice) {
				document.removeEventListener("mousemove", handleMouseMove);
				document.removeEventListener("mouseleave", hideCursor);
			}
			interactiveElements.forEach((el) => {
				el.removeEventListener("mouseenter", handleMouseEnter);
				el.removeEventListener("mouseleave", handleMouseLeave);
			});
			clearTimeout(idleTimeout);
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
		z-index: 9999;
		opacity: 0; /* Initially hidden */
		transition: opacity 0.3s ease-in-out, transform 0.1s linear;
		transform: translate(-50%, -50%);
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
		width: 18px;
		height: 18px;
		border: 2px solid var(--secondary-color);
		opacity: 0.5;
	}

	/* Hover effects for cursor and trail */
	:global(.cursor.hover) {
		width: 28px;
		height: 28px;
		background-color: var(--primary-color);
		opacity: 0.8;
		transform: translate(-50%, -50%) scale(1.2);
	}

	:global(.cursor-trail.hover) {
		width: 36px;
		height: 36px;
		opacity: 0.4;
		transform: translate(-50%, -50%) scale(1.1);
	}
</style>
