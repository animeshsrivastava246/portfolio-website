<script lang="ts">
	import { onMount } from "svelte";
	import { fadeIn } from "../animations/gsap";
	import { submitContactForm } from "../services/firebase";

	let contactRef: HTMLElement;
	let formRef: HTMLElement;
	let name = "";
	let email = "";
	let message = "";
	let successMessage = "";
	let errorMessage = "";
	let isSubmitting = false;

	onMount(() => {
		fadeIn(contactRef);
	});

	const handleSubmit = async () => {
		if (!name || !email || !message) {
			errorMessage = "All fields are required!";
			return;
		}

		isSubmitting = true;
		const response = await submitContactForm(name, email, message);
		isSubmitting = false;

		if (response.success) {
			successMessage = "Sent Successfully!";
			name = "";
			email = "";
			message = "";
		} else {
			errorMessage = "Failed to send message. Try again later!";
		}

		setTimeout(() => {
			successMessage = "";
			errorMessage = "";
		}, 3000);
	};
</script>

<section
	id="Contact"
	bind:this={contactRef}
	class="section relative py-24 px-6 md:px-12"
	style="background-image: url('/assets/backdrops/ContactBanner.webp');"
>
	<!-- Contact Header -->
	<div class="max-w-5xl mx-auto text-left">
		<h2>Let's Connect</h2>
		<p
			class="mt-6 text-lg bg-gradient-to-r from-white via-[var(--text-color)] to-[var(--accent-color)] bg-clip-text text-transparent font-extrabold tracking-wide"
		>
			Have a project in mind or just want to say hi? Fill out the form below,
			and let us create something amazing!
		</p>
	</div>

	<!-- Contact Form -->
	<div
		bind:this={formRef}
		class="mt-12 max-w-lg mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 animate-glow"
	>
		<!-- Name Input -->
		<input
			type="text"
			bind:value={name}
			placeholder="Your Name"
			class="w-full px-4 py-3 border-2 border-white/50 bg-black/30 text-secondary/90 rounded-lg focus:outline-none
			focus:border-[var(--accent-color)] transition duration-350 mb-4 placeholder-white/60"
		/>

		<!-- Email Input -->
		<input
			type="email"
			bind:value={email}
			placeholder="Your Email"
			class="w-full px-4 py-3 border-2 border-white/50 bg-black/30 text-secondary/90 rounded-lg focus:outline-none
			focus:border-[var(--accent-color)] transition duration-350 mb-4 placeholder-white/60"
		/>

		<!-- Message Input -->
		<textarea
			bind:value={message}
			placeholder="Your Message"
			class="w-full px-4 py-3 border-2 border-white/50 bg-black/30 text-secondary/90 rounded-lg focus:outline-none
			focus:border-[var(--accent-color)] transition duration-350 mb-4 h-32 placeholder-white/60"
		></textarea>

		<!-- Feedback Messages -->
		{#if successMessage}
			<p class="text-green-350">{successMessage}</p>
		{/if}
		{#if errorMessage}
			<p class="text-red-400">{errorMessage}</p>
		{/if}

		<!-- Submit Button -->
		<button
			on:click={handleSubmit}
			disabled={isSubmitting}
			class="btn w-full mt-4"
		>
			{isSubmitting ? "Sending, Please Wait" : "Send Message"}
		</button>
	</div>
</section>
