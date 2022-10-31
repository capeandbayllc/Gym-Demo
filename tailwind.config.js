/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		themes: [
			{
				dark: {
					primary: "#052F61",
					"primary-focus": "#0A00FF",
					"primary-content": "#CBD0D5",
					secondary: "#0074C8",
					"secondary-focus": "#073A76",
					"secondary-content": "#001B5D",
					accent: "#BA00FF",
					"accent-focus": "#1DFF00",
					warning: "#FFD800",
					info: "#00C7F7",
					"info-content": "#5E9ECD",
					neutral: "#1C1C1C",
					"base-content": "#ffffff",
					"accent-content": "#ffffff",
					"neutral-focus": "#000A10",
					"neutral-content": "#9E9E9E",
					"base-100": "#242424",
					"base-200": "#202020",
					"base-300": "#1c1c1c",
					success: "#01B481",
					error: "#ff0000",
				},
			}
		],
	},
};
