import { vitePreprocess } from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

export default {
	preprocess: [vitePreprocess(), tailwindcss()],
	extensions: [".svelte"],
};
