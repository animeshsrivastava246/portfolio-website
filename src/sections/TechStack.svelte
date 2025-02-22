<script lang="ts">
	// import logos from "/assets/logos/svg";
</script>

<section id="TechStack" class="my-20 py-20">
	<h2 class="text-7xl font-bold text-center my-10">&lt; Languages /&gt;</h2>
	<div class="overflow-hidden">
		<div class="flex animate-scroll">
			<!-- {#each logos as logo}
				<img src={logo} alt="Logo" class="h-40 mx-8" />
			{/each}
			{#each logos as logo}
				<img src={logo} alt="Logo" class="h-40 mx-8" />
			{/each} -->
		</div>
	</div>
</section>

<style>
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.animate-scroll {
		animation: scroll 35s linear infinite;
	}
</style>
