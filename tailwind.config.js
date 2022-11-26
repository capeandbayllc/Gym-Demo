/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
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
	theme: {
    screens: {
	  '-sm': {'max': '640px'},
      // => @media (max-width: 640px) { ... }

      '-md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      '-lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      '-xl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }

      '-2xl': {'max': '1536px'},
      // => @media (max-width: 1536px) { ... }
	  
	  '-3xl': {'max': '1920px'},
      // => @media (max-width: 1536px) { ... }

	  'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

	  '3xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    }
}
};
