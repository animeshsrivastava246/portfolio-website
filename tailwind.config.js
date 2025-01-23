/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html", // Ensure the root HTML file is included
		"./src/**/*.{js,ts,jsx,tsx}", // Include all relevant files in the src directory
	],
	theme: {
		extend: {}, // Add customizations here
	},
	plugins: [],
};
