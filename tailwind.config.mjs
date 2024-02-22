/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
		extend: {
			spacing: {
				'56': '56px',
				'32': '32px',
			}
		},
	},
	variants: {},
	plugins: [],
}