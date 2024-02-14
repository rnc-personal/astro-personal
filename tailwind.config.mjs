/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'cv-grid': '1fr 32px 1fr',
			},
		},
		screens: {
			'sm': '480px',
			'md': '768px',
			'lg': '976px',
			'xl': '1200px',
		},
	},
	plugins: [],
}
