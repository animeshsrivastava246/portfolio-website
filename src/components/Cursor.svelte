<script lang="ts">
	import { onMount } from "svelte";
	import gsap from "gsap";

	let cursor: HTMLElement;
	let cursorTrail: HTMLElement;
	let idleTimeout: NodeJS.Timeout;
	let isTouchDevice: boolean = false; // Variable to track if it's a touch device

	// Function to detect if the device is a touch device
	const checkTouchDevice = () => {
		// Simple check for touch device
		isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
	};

	// Function to handle mousemove event
	const handleMouseMove = (e: MouseEvent) => {
		if (isTouchDevice) return; // Do nothing if it's a touch device

		// Show cursor when moving
		cursor.style.opacity = "1";
		cursorTrail.style.opacity = "1";

		// Reset idle timer
		resetIdleTimer();

		// Main cursor moves instantly
		gsap.to(cursor, { left: e.clientX, top: e.clientY, duration: 0 });

		// Cursor trail follows with a delay
		gsap.to(cursorTrail, { left: e.clientX, top: e.clientY, duration: 0.35 });
	};

	// Function to hide cursor when idle
	const hideCursor = () => {
		if (isTouchDevice) return; // Do nothing if it's a touch device
		cursor.style.opacity = "0";
		cursorTrail.style.opacity = "0";
	};

	// Reset idle timer
	const resetIdleTimer = () => {
		if (isTouchDevice) return; // Do nothing if it's a touch device
		clearTimeout(idleTimeout);
		idleTimeout = setTimeout(hideCursor, 1500); // Hide after 1.5 seconds of inactivity
	};

	const handleMouseEnter = () => {
		if (isTouchDevice) return; // Do nothing if it's a touch device
		cursor.classList.add("hover");
		cursorTrail.classList.add("hover");
	};

	const handleMouseLeave = () => {
		if (isTouchDevice) return; // Do nothing if it's a touch device
		cursor.classList.remove("hover");
		cursorTrail.classList.remove("hover");
	};

	onMount(() => {
		// Check if the device is touch
		checkTouchDevice();

		// Initially hide the cursor
		cursor.style.opacity = "0";
		cursorTrail.style.opacity = "0";

		// Attach mousemove event
		if (!isTouchDevice) {
			document.addEventListener("mousemove", handleMouseMove);
		}

		// Hover effects for interactive elements
		const interactiveElements = document.querySelectorAll("a, button");
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
		transform: translate(-50%, -50%);
		z-index: 9999;
		opacity: 0; /* Initially hidden */
		transition: opacity 0.35s ease-in-out;
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
		border: 2px solid var(--secondary-color);
		opacity: 0.5;
	}

	/* Hover effects for cursor and trail */
	:global(.cursor.hover) {
		width: 24px;
		height: 24px;
		background-color: var(--primary-color);
		opacity: 0.7;
	}

	:global(.cursor-trail.hover) {
		width: 32px;
		height: 32px;
		opacity: 0.3;
	}
</style>
