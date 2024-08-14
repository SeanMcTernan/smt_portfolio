import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primaryGray: '#202021',
				secondaryGray: '#505459',
				primaryTeal: '#3395ad',
				primaryBlue: '#66cbea',
				primaryWhite: '#bdbdbd',
				default: 'var(--aw-color-text-default)',
				muted: 'var(--aw-color-text-muted)',
			},
			fontFamily: {
				sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
				serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
				heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	darkMode: 'class',
};
