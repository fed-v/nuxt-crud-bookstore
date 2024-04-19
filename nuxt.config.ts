// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
    '@nuxtjs/i18n',
  ],

  i18n: {
    /* module options */
    //vueI18n: './i18n.config.ts',
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "fr-FR",
        iso: "efr-FR",
        name: "French(FR)",
        file: "fr-FR.json",
      }
    ],
    defaultLocale: "en-US",
  },

  tailwindcss: {
    cssPath: "~/assets/main.css",
  },

  devtools: { 
    enabled: false 
  },

  runtimeConfig: {
    // If you are using latest nodejs (v17.x) , then try updating mongodb url from localhost to 127.0.0.1!
    MONGO_URI: process.env.MONGO_URI,
  },

  nitro: {
    plugins: ["@/server/db/index.ts"],
  },

  build: {
    transpile: ["@headlessui/vue", "vue-toastification", "@headlessui/tailwindcss"],
  },

})
