<script lang="ts">
	let languages = [
		{ name: "JavaScript", icon: "/icons/javascript.svg" },
		{ name: "Java", icon: "/icons/java.svg" },
		{ name: "C++", icon: "/icons/cpp.svg" },
	];

	let stacks = [
		{ name: "React.js", icon: "/icons/react.svg" },
		{ name: "Node.js", icon: "/icons/node.svg" },
		{ name: "Next.js", icon: "/icons/next.svg" },
	];
</script>

<section id="TechStack" class="py-20 text-center">
	<h2 class="text-3xl font-bold text-accent">&lt; Languages /&gt;</h2>
	<!-- <div class="flex flex-wrap justify-center gap-6 mt-6">
		{#each languages as lang}
			<div
				class="bg-white/10 backdrop-blur-md px-6 py-4 rounded-lg flex items-center gap-3 shadow-md"
			>
				<img src={lang.icon} alt={lang.name} class="w-8 h-8" />
				<span class="text-lg">{lang.name}</span>
			</div>
		{/each}
	</div>

	<h2 class="text-3xl font-bold text-accent mt-12">&lt; Stack /&gt;</h2>
	<div class="flex flex-wrap justify-center gap-6 mt-6">
		{#each stacks as stack}
			<div
				class="bg-white/10 backdrop-blur-md px-6 py-4 rounded-lg flex items-center gap-3 shadow-md"
			>
				<img src={stack.icon} alt={stack.name} class="w-8 h-8" />
				<span class="text-lg">{stack.name}</span>
			</div>
		{/each}
	</div> -->
</section>
