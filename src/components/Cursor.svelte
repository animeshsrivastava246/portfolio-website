<script lang="ts">
	import { onMount, onDestroy } from "svelte";

	let cursor: HTMLElement;
	let cursorTrail: HTMLElement;
	let idleTimeout: NodeJS.Timeout;
	let isTouchDevice = false;

	let mouseX = 0;
	let mouseY = 0;
	let trailX = 0;
	let trailY = 0;

	const checkTouchDevice = () => {
		isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
	};

	const resetIdleTimer = () => {
		if (isTouchDevice) return;
		clearTimeout(idleTimeout);
		cursor.style.opacity = "1";
		cursorTrail.style.opacity = "1";
		idleTimeout = setTimeout(() => {
			cursor.style.opacity = "0";
			cursorTrail.style.opacity = "0";
		}, 1500);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (isTouchDevice) return;
		mouseX = e.clientX;
		mouseY = e.clientY;
		resetIdleTimer();
	};

	const handleMouseEnter = () => {
		cursor.classList.add("hover");
		cursorTrail.classList.add("hover");
	};

	const handleMouseLeave = () => {
		cursor.classList.remove("hover");
		cursorTrail.classList.remove("hover");
	};

	let animationFrame: number;
	const animateTrail = () => {
		if (isTouchDevice) return;

		// Lerp trail position toward mouse
		const speed = 0.1;
		trailX += (mouseX - trailX) * speed;
		trailY += (mouseY - trailY) * speed;

		cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
		cursorTrail.style.transform = `translate(${trailX}px, ${trailY}px) translate(-50%, -50%)`;

		animationFrame = requestAnimationFrame(animateTrail);
	};

	onMount(() => {
		checkTouchDevice();

		if (!isTouchDevice) {
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseleave", resetIdleTimer);

			// Add hover listeners
			const interactive = document.querySelectorAll("a, button, .hover-target");
			interactive.forEach((el) => {
				el.addEventListener("mouseenter", handleMouseEnter);
				el.addEventListener("mouseleave", handleMouseLeave);
			});

			// Start animation loop and idle timer
			animateTrail();
			resetIdleTimer();

			return () => {
				document.removeEventListener("mousemove", handleMouseMove);
				document.removeEventListener("mouseleave", resetIdleTimer);
				interactive.forEach((el) => {
					el.removeEventListener("mouseenter", handleMouseEnter);
					el.removeEventListener("mouseleave", handleMouseLeave);
				});
				clearTimeout(idleTimeout);
				cancelAnimationFrame(animationFrame);
			};
		}
	});
</script>

<!-- Main Cursor -->
<div bind:this={cursor} class="cursor"></div>
<div bind:this={cursorTrail} class="cursor-trail"></div>

<style>
	:global(*) {
		cursor: none;
	}

	:global(.cursor),
	:global(.cursor-trail) {
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		border-radius: 50%;
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: 9999;
	}

	:global(.cursor) {
		width: 12px;
		height: 12px;
		background: var(--text-color);
	}

	:global(.cursor-trail) {
		width: 18px;
		height: 18px;
		border: 2px solid var(--secondary-color);
	}

	:global(.cursor.hover) {
		width: 28px;
		height: 28px;
		transform: scale(1.1);
	}

	:global(.cursor-trail.hover) {
		width: 36px;
		height: 36px;
		transform: scale(1.1);
	}
</style>
