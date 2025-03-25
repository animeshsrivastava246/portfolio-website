<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { fly } from "svelte/transition";
	import data from "../data/data.json";
	import { cubicOut } from "svelte/easing";

	export let onClose;
	const resumeUrl = "/Animesh-Resume.pdf";
	let isVisible = false; // Initially false to delay entry
	let modalRef: HTMLElement;

	// Prevent background scrolling
	const disableScroll = () => {
		document.body.classList.add("overflow-hidden");
	};
	const enableScroll = () => {
		document.body.classList.remove("overflow-hidden");
	};

	// Ensure animation plays on mount
	onMount(() => {
		setTimeout(() => {
			isVisible = true;
			disableScroll(); // Prevent scrolling when modal opens
		}, 50);
	});

	// Cleanup function to enable scrolling when modal closes
	onDestroy(() => {
		enableScroll();
	});
</script>

<!-- Resume Modal Container -->
<aside
	class="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md p-4 md:p-6 lg:p-8 z-50"
>
	<!-- Main Modal Box -->
	<div
		bind:this={modalRef}
		in:fly={{ y: -400, duration: 350, easing: cubicOut }}
		out:fly={{ y: -400, duration: 350, easing: cubicOut }}
		class="bg-white/10 p-6 md:p-8 rounded-2xl shadow-lg border border-white/20 max-w-3xl w-full"
	>
		<!-- Header -->
		<div class="flex justify-between items-center mb-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				{data.info.name} - Resume
			</h2>
		</div>

		<!-- Resume Preview -->
		<div
			class="w-full h-[70vh] rounded-md overflow-hidden border border-white/30"
		>
			<iframe src={resumeUrl} class="w-full h-full" title="Resume Preview"
			></iframe>
		</div>

		<!-- Action Buttons -->
		<div class="flex justify-between mt-6">
			<a href={resumeUrl} download="Animesh_Srivastava_Resume.pdf" class="btn">
				Download PDF
			</a>
			<button
				on:click={() => {
					isVisible = false;
					setTimeout(() => {
						onClose();
						enableScroll(); // Enable scrolling when modal is closed
					}, 350);
				}}
				class="btn"
			>
				Close
			</button>
		</div>
	</div>
</aside>

<style>
	/* Prevent background scroll */
	.overflow-hidden {
		overflow: hidden;
	}
</style>
