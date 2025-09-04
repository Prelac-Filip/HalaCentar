// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image"],

  css: ["~/assets/css/main.css"],

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

  compatibilityDate: "2025-07-16",
});