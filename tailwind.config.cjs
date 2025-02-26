/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors: {
				// primary: colors.blue,
				// secondary: colors.pink,
				'black': "#17191E",
				'trust': { // slate blue
					50: '#F5F7FA',
					100: '#EBEFF3',
					200: '#D2DCE5',
					400: '#7C9AB4',
					500: '#5B7C99',
					600: '#486581',
					800: '#344558',
					900: '#2F3D4B',
				},
				'dark-b': '#111827',
				'midnight': '#121063',

				"astro-gray": {
					100: "#F2F6FA",
					200: "#BFC1C9",
					300: "#858B98",
					400: "#545864",
					500: "#343841",
					600: "#23262D",
					700: "#17191E",
				},
				"astro-blue": "#3245FF",
				"astro-purple": "#BC52EE",
				"astro-purple-dark": "#3F224D",
				"astro-red": "#D83333",
				"astro-pink": {
					light: "#E8C4F9",
					DEFAULT: "#F041FF",
				},
				"astro-orange": "#F8E42E",
				"astro-yellow": "#FF7D54",
				"astro-hover": "#E8C4F9",
			},
			fontFamily: {
				sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
				porza: "'Proza Libre', sans-serif",
			},
			backgroundImage: {
				"blue-purple-gradient": "linear-gradient(83.21deg, #3245FF 0%, #B845ED 100%)",
				"blue-green-gradient": "linear-gradient(247.23deg, #4AF2C8 0%, #2F4CB3 100%)",
				"red-pink-gradient": "linear-gradient(66.77deg, #D83333 0%, #F041FF 100%)",
				"orange-yellow-gradient": "linear-gradient(266.93deg, #F8E42E 0%, #FF7D54 100%)",
			},
			height: {
				header: "5rem",
			},
			lineHeight: {
				prose: 1.8125,
			},
			maxWidth: {
				prose: "1920px",
			},
			zIndex: {
				"white-button-fill": -1,
				noise: -2,
				grid: -3,
				blur: -4,
			},
		},
		variants: {
			backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
			textColor: ['responsive', 'hover', 'focus', 'dark',],
			borderColor: ['responsive', 'hover', 'focus', 'dark'],
			animation: ['hover', 'focus']
		},
	},
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/typography'),
		// adds a `s-*` utility to apply the same width and height
		plugin(function sizePlugin(api) {
			api.matchUtilities(
				{ s: (value) => ({ width: value, height: value }) },
				{ values: api.theme("width") },
			)
		}),

		// adds `fluid-cols-*`, `fluid-cols-fit`, and `fluid-cols-fill` utilities
		plugin(function fluidColumnsPlugin(api) {
			api.matchUtilities(
				{
					"fluid-cols": (value) => ({
						gridTemplateColumns: `repeat(var(--fluid-cols-repeat, auto-fill), minmax(${value}, 1fr))`,
					}),
				},
				{ values: api.theme("width") },
			)

			api.addUtilities({
				".fluid-cols-fit": { "--fluid-cols-repeat": "auto-fit" },
				".fluid-cols-fill": { "--fluid-cols-repeat": "auto-fill" },
			})
		}),

		plugin(function astroComponentsPlugin({ addComponents, theme }) {
			addComponents({
				"b, strong": {
					fontWeight: 700,
				},

				":focus-visible": {
					"@apply outline-astro-pink-light outline-offset-2": {},
				},

				".container": {
					"@apply w-full mx-auto max-w-screen-2xl px-4 md:px-8": {},
				},

				".grid-container": {
					display: "grid",
					gridTemplateColumns:
						"1fr min(var(--container-width, 2000px), calc(100% - (2 * var(--container-gutter-size, 0px)))) 1fr",
					gridColumnGap: "var(--container-gutter-size, 2px)",
					overflow: "clip",
					width: "100%",
					rowGap: theme("spacing.24"),
					paddingBottom: theme("spacing.24"),
					"@media screen(md)": {
						rowGap: theme("spacing.32"),
						paddingBottom: theme("spacing.32"),
					},
					"@media screen(lg)": {
						rowGap: theme("spacing.20"),
						paddingBottom: theme("spacing.20"),
					},

					/* center all children by default */
					"& > *": {
						gridColumn: "2",
					},

					/* allows content to bleed edge to edge */
					"& > .bleed-full": {
						gridColumn: "1 / -1",
					},

					/* allows content to bleed to starting edge */
					"& > .bleed-start": {
						gridColumn: "1 / 3",
					},

					/* allows content to bleed to ending edge */
					"& > .bleed-end": {
						gridColumn: "2 / -1",
					},

					"& > .bleed-none": {
						gridColumn: "2 !important",
					},
				},

				".accordion": {
					"&::-webkit-details-marker": {
						display: "none",
					},
				},

				".heading-1": {
					"@apply font-sans text-7xl leading-tight": {},
				},

				".heading-2": {
					"@apply font-sans text-6xl leading-tight": {},
				},

				".heading-3": {
					"@apply font-sans text-4xl leading-tight": {},
					fontSize: "32px",
				},

				".heading-4": {
					"@apply font-sans text-2xl leading-tight": {},
				},

				".heading-5": {
					"@apply font-sans text-xl leading-tight": {},
				},

				".body": {
					"@apply font-sans text-base font-light": {},
				},
				".body-large": {
					"@apply font-sans text-2xl font-extralight leading-normal": {},
				},

				".code": {
					"@apply font-mono font-light": {},
				},

				".link": {
					"@apply transition-colors text-astro-gray-100 hover:text-astro-gray-300": {},
				},
				".link-underline": {
					"@apply link border-b border-astro-gray-100 hover:border-astro-gray-300": {},
				},

				".input": {
					"@apply rounded-lg border border-astro-gray-500 bg-astro-gray-600 p-3 leading-none shadow-inner":
						{},
				},
				".input-textarea": {
					"@apply py-2 leading-normal": {},
				},

				".noise-container": {
					position: "relative",
					isolation: "isolate",
					"@apply bg-white dark:bg-astro-gray-700 w-full": {}
				},
				".noise-underlay": {
					zIndex: -30,
					position: "relative",
				},
				".noise": {
					zIndex: -20,
					position: "absolute",
					inset: 0,
					backgroundImage: `url("/assets/noise.webp")`,
					opacity: 0.4,
					mixBlendMode: "overlay",
					pointerEvents: "none",
				},
				".noise-panel": {
					"@apply relative isolate border border-astro-gray-500 bg-white dark:bg-astro-gray-600 shadow-xl": {},
					"&::before": {
						"@apply absolute inset-0 opacity-40 mix-blend-overlay -z-20": {},
						content: "''",
						backgroundImage: `url("/assets/noise.webp")`,
					},
				},

				".landing-section": {
					"@apply flex flex-col items-center justify-center overflow-visible text-center": {},
				},

				".bg-grid": {
					// https://stackoverflow.com/a/32861765/1332403
					backgroundSize: "20px 20px",
					backgroundImage: `linear-gradient(to right, ${theme(
						"colors.astro-gray.100",
					)} 1px, transparent 1px),\n    linear-gradient(to bottom, ${theme(
						"colors.astro-gray.100",
					)} 1px, transparent 1px)`,
					backgroundPosition: "top center",
					imageRendering: "pixelated",	
					// https://stackoverflow.com/a/9670876/1332403
					maskImage: `linear-gradient(to bottom, transparent, 5%, white, 95%, transparent)`,
				},
				".bg-grid-dark": {
					// https://stackoverflow.com/a/32861765/1332403
					backgroundSize: "20px 20px",
					backgroundImage: `linear-gradient(to right, ${theme(
						"colors.astro-gray.600",
					)} 1px, transparent 1px),\n    linear-gradient(to bottom, ${theme(
						"colors.astro-gray.600",
					)} 1px, transparent 1px)`,
					backgroundPosition: "top center",
					imageRendering: "pixelated",	
					// https://stackoverflow.com/a/9670876/1332403
					maskImage: `linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)`,
				},
			})
		}),

		plugin(function maskGradientPlugin(api) {
			api.addUtilities({
				".mask-radial-gradient": {
					maskImage: "radial-gradient(rgba(0, 0, 0, 0.8), transparent 60%)",
				},
				".mask-linear-gradient-to-b": {
					maskImage: "linear-gradient(to bottom, white 0%, white 33%, transparent 90%)",
				},
			})
		}),
	],
	
};
