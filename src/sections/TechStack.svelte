<script lang="ts">
	import data from "../data/data.json"; // Importing the data
  
	// Extracting both names and paths from the skillsList
	const loadedSvgs = data.skillsList;
  </script>
  
  <section
	id="TechStack"
	class="relative bg-black/80 backdrop-blur-lg py-16 overflow-hidden"
  >
	<!-- Background Glow -->
	<div
	  class="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] opacity-10 blur-3xl -z-10"
	></div>
  
	<!-- Section Title -->
	<h2
	  class="text-4xl font-bold text-center text-[var(--accent-color)] tracking-wide mb-12"
	>
	  &lt; Technologies & Tools /&gt;
	</h2>
  
	<!-- Infinite Scrolling Logos -->
	<div class="relative w-full flex overflow-hidden">
	  <!-- Duplicate content for seamless looping -->
	  <div class="flex whitespace-nowrap animate-scroll py-4">
		{#each [...loadedSvgs, ...loadedSvgs] as { name, path }}
		  <img
			src={path}
			alt={name}  
			class="h-16 md:h-20 lg:h-24 mx-6 opacity-80 transition-transform duration-300 hover:scale-110 hover:opacity-100"
		  />
		{/each}
	  </div>
	</div>
  </section>
  
  <style>
	/* Infinite Scroll Animation */
	@keyframes scroll {
	  from {
		transform: translateX(0);
	  }
	  to {
		transform: translateX(-50%);
	  }
	}
  
	.animate-scroll {
	  display: flex;
	  gap: 2rem;
	  animation: scroll 150s linear infinite;
	  will-change: transform;
	}
  </style>
  