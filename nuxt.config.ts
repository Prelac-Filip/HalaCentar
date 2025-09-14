// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "nuxt-mail"],

  mail: {
    message: {
      to: '<EMAIL HERE>',
    },
    smtp: {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
          user: '<EMAIL HERE>',
          pass: '<PASSWORD HERE>',
        },
    },
  },

  css: ["~/assets/css/main.css"],

  nitro: {
    prerender: {
      ignore: ["/pridruzi-se"],
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Hala Trening Centar",
      htmlAttrs: {
        lang: "hr",
      },
      script: [
        {
          src: "https://unpkg.com/tailwindcss-intersect@2.x.x/dist/observer.min.js",
          defer: true,
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './app/assets/icons'
    }]
  },

  compatibilityDate: "2025-07-16",
});