/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,svelte,js,ts}"],
	theme: {
		extend: {
			colors: {
				primary: "#0ea5e9", // Adjust to match theme
				accent: "#facc15",
			},
		},
	},
	plugins: [],
};
