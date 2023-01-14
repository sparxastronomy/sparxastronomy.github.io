/** @type {import('tailwindcss').Config} */


const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				secondary: colors.pink,
				'trust': {
					50: '#eceff1',
					400: '#90a4ae',
					500: '#607d8b',
					800: '#37474f',
					900: '#263238',
				},
				'dark-b': '#111827',
				'midnight': '#121063',
			},
			fontFamily: {
				sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
				lora: "'Lora', serif",
				porza: "'Proza Libre', sans-serif",
			},
			},
			variants: {
			  backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
			  textColor: ['responsive', 'hover', 'focus', 'dark',],
			  borderColor: ['responsive', 'hover', 'focus', 'dark'],
			  animation: ['hover', 'focus']
			},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};
