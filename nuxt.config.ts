// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-16',
			viewport: 'width=500, initial-scale=1', 
			title: 'GymRevenue',
			link: [
				{ href: 'https://fonts.googleapis.com', rel: 'preconnect' },
				{ href: 'https://fonts.gstatic.com', rel: 'preconnect' },
				{ href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap', rel: 'stylesheet' },
			],
			bodyAttrs: {
				class: "overflow-x-hidden"
			}	
		},
	},
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
	apollo: {
		clients: {
			default: {
				httpEndpoint: 'https://api.spacex.land/graphql',
			}
		},
	}
})
