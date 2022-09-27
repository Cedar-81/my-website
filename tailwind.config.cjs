/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mainColor: '#AE0721',
				grayColor: "#121212"
			}
		},
	},
	plugins: [],
}
