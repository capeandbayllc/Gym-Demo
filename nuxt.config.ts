// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "GymRevenue",
      link: [
        { href: "https://fonts.googleapis.com", rel: "preconnect" },
        { href: "https://fonts.gstatic.com", rel: "preconnect" },
        {
          href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap",
          rel: "stylesheet",
        },
      ],
      bodyAttrs: {
        class: "overflow-x-hidden",
      },
    },
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
});
//trigger rebuild