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
					secondary: "#0074C8",
					"secondary-focus": "#073A76",
					warning: "#FFD800",
					info: "#00C7F7",
					accent: "#BA00FF",
					neutral: "#1C1C1C",
					"base-content": "#ffffff",
					"primary-content": "#ffffff",
					"secondary-content": "#ffffff",
					"accent-focus": "#6CAF00",
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
