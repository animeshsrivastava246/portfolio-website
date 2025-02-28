<script lang="ts">
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
	const toggleSwitch: HTMLInputElement = document.getElementById(
		"toggleSwitch"
	) as HTMLInputElement;
	toggleSwitch?.addEventListener("change", () => {
		if (toggleSwitch.checked) {
			document.documentElement.classList.add("night");
		} else {
			document.documentElement.classList.remove("night");
		}
	});
</script>

<div class="container">
	<label class="switch">
		<input type="checkbox" onclick={toggleTheme} id="toggleSwitch" />
		<div class="slider">
			<div class="sun"></div>
			<div class="moon"></div>
			<div class="cloud cloud1"></div>
			<div class="cloud cloud2"></div>
			<div class="star star1"></div>
			<div class="star star2"></div>
			<div class="star star3"></div>
			<div class="star star4"></div>
			<div class="star star5"></div>
		</div>
	</label>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.switch {
		position: relative;
		width: 300px;
		height: 150px;
		background: linear-gradient(0deg, #87ceeb 0%, #e0f6ff 100%);
		border-radius: 75px;
		cursor: pointer;
		transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		border: 4px solid #ffffff;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: 1s;
	}

	.sun,
	.moon {
		position: absolute;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		top: 25px;
		transition: 1s;
	}

	.sun {
		background: radial-gradient(circle, #ffd700 30%, #ffa500 70%);
		left: 25px;
		box-shadow: 0 0 20px #ffd700;
		transform: scale(1);
	}

	.moon {
		background: radial-gradient(circle, #f4f4f4 30%, #e0e0e0 70%);
		right: -120px;
		box-shadow: 0 0 20px #f4f4f4;
		transform: scale(0);
	}

	.cloud {
		background-color: white;
		border-radius: 50px;
		position: absolute;
		transition: 1s;
	}

	.cloud::before,
	.cloud::after {
		content: "";
		position: absolute;
		background-color: white;
		border-radius: 50%;
	}

	.cloud1 {
		width: 100px;
		height: 30px;
		top: 30px;
		left: 140px;
	}

	.cloud1::before {
		width: 50px;
		height: 50px;
		top: -25px;
		left: 10px;
	}

	.cloud1::after {
		width: 40px;
		height: 40px;
		top: -20px;
		right: 10px;
	}

	.cloud2 {
		width: 60px;
		height: 20px;
		top: 80px;
		left: 200px;
	}

	.cloud2::before {
		width: 30px;
		height: 30px;
		top: -15px;
		left: 5px;
	}

	.cloud2::after {
		width: 25px;
		height: 25px;
		top: -12px;
		right: 5px;
	}

	.star {
		position: absolute;
		background-color: white;
		clip-path: polygon(
			50% 0%,
			61% 35%,
			98% 35%,
			68% 57%,
			79% 91%,
			50% 70%,
			21% 91%,
			32% 57%,
			2% 35%,
			39% 35%
		);
		opacity: 0;
		transition: 1s;
	}

	.star1 {
		width: 20px;
		height: 20px;
		top: 30px;
		left: 40px;
	}
	.star2 {
		width: 15px;
		height: 15px;
		top: 60px;
		left: 80px;
	}
	.star3 {
		width: 10px;
		height: 10px;
		top: 100px;
		left: 60px;
	}
	.star4 {
		width: 12px;
		height: 12px;
		top: 40px;
		left: 120px;
	}
	.star5 {
		width: 8px;
		height: 8px;
		top: 80px;
		left: 140px;
	}

	input:checked + .slider {
		background: linear-gradient(0deg, #1a1a2e 0%, #16213e 100%);
	}

	input:checked + .slider .sun {
		left: -120px;
		transform: scale(0);
	}

	input:checked + .slider .moon {
		right: 25px;
		transform: scale(1);
	}

	input:checked + .slider .cloud {
		transform: translateX(300px) scale(0);
	}

	input:checked + .slider .star {
		opacity: 1;
		transform: scale(1.5);
	}

	@keyframes twinkle {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	input:checked + .slider .star {
		animation: twinkle 2s infinite;
	}

	input:checked + .slider .star1 {
		animation-delay: 0s;
	}
	input:checked + .slider .star2 {
		animation-delay: 0.4s;
	}
	input:checked + .slider .star3 {
		animation-delay: 0.8s;
	}
	input:checked + .slider .star4 {
		animation-delay: 1.2s;
	}
	input:checked + .slider .star5 {
		animation-delay: 1.6s;
	}
</style>
