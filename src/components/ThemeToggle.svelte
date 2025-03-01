<script>
	import { onMount } from "svelte";

	let isDarkMode = false;

	onMount(() => {
		isDarkMode = localStorage.getItem("theme") === "dark";
		document.documentElement.classList.toggle("dark-theme", isDarkMode);
	});

	function toggleTheme() {
		isDarkMode = !isDarkMode;
		document.documentElement.classList.toggle("dark-theme", isDarkMode);
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");
	}
</script>

<button on:click={toggleTheme} class="theme-toggle">
	{#if isDarkMode}
		<!-- Light Mode Icon (Sun) -->
		<img src="/assets/logos/dark-mode.svg" alt="Dark Mode" />
	{:else}
		<!-- Dark Mode Icon (Moon) -->
		<img src="/assets/logos/light-mode.svg" alt="Light Mode" />
	{/if}
</button>

<style>
	img {
		width: 40px;
		padding: 8px;
		border-radius: 50%;
		background-color: var(--primary-color);
		cursor: pointer;
		position: fixed;
		bottom: 8px;
		right: 8px;
	}
</style>
