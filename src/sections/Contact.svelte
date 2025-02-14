<script lang="ts">
	import { onMount } from "svelte";
	import { fadeIn } from "../animations/gsap";
	import { submitContactForm } from "../services/firebase";

	let contactRef: HTMLElement;
	let name = "";
	let email = "";
	let message = "";
	let successMessage = "";
	let errorMessage = "";

	onMount(() => fadeIn(contactRef));

	const handleSubmit = async () => {
		if (!name || !email || !message) {
			errorMessage = "All fields are required!";
			return;
		}

		const response = await submitContactForm(name, email, message);
		if (response.success) {
			successMessage = "Message sent successfully!";
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
	class="py-20 text-center bg-orange-600 text-white"
>
	<h2 class="text-3xl font-bold">&lt; Contact /&gt;</h2>
	<p class="mt-4 text-lg max-w-2xl mx-auto">
		Let’s get in touch! Fill out the form below.
	</p>

	<div
		class="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg text-black"
	>
		<input
			type="text"
			bind:value={name}
			placeholder="Your Name"
			class="w-full px-4 py-2 border mb-3 rounded-md"
		/>
		<input
			type="email"
			bind:value={email}
			placeholder="Your Email"
			class="w-full px-4 py-2 border mb-3 rounded-md"
		/>
		<textarea
			bind:value={message}
			placeholder="Your Message"
			class="w-full px-4 py-2 border mb-3 rounded-md"
		></textarea>

		{#if successMessage}
			<p class="text-green-500">{successMessage}</p>
		{/if}
		{#if errorMessage}
			<p class="text-red-500">{errorMessage}</p>
		{/if}

		<button
			on:click={handleSubmit}
			class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
		>
			Send Message
		</button>
	</div>
</section>
