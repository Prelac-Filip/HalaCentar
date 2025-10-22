// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    emailPass: process.env.NUXT_EMAIL_PASS,
    public: {
      emailUser: process.env.NUXT_PUBLIC_EMAIL_USER,  // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      metapixel: {
        default: { id: process.env.META_PIXEL_ID || '' },
      },
    }
  },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "nuxt-mail", "nuxt-meta-pixel"],

  colorMode: {
    preference: 'dark',
  },

  mail: {
    message: {
      to: process.env.NUXT_PUBLIC_EMAIL_USER,
    },
    smtp: {
      host: "smtp.hostinger.com",
      port: 465,
      auth: {
        user: process.env.NUXT_PUBLIC_EMAIL_USER,
        pass: process.env.NUXT_EMAIL_PASS,
      },
    },
  },

  css: ["~/assets/css/main.css"],

  nitro: {
    prerender: {
      ignore: ["/pridruzi-se", "/mail/**"],
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