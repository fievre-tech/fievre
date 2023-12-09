// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge"
  },
  devtools: {
    enabled: true
  },
  typescript: {
    typeCheck: true
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-icon", "@nuxtjs/i18n"],
  hooks: {
    "components:dirs": (dirs) => {
      dirs.unshift({
        path: "~/components/ui",
        extensions: [".vue"],
        prefix: "Ui",
        pathPrefix: false
      });
    }
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        name: "English"
      },
      {
        code: "zh",
        name: "简体中文"
      },
      {
        code: "zh_tw",
        name: "繁體中文"
      },
      {
        code: "fr",
        name: "Français"
      },
      {
        code: "es",
        name: "Español"
      },
      {
        code: "ja",
        name: "にほんご"
      },
      {
        code: "ko",
        name: "한국어"
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root" // recommended
    }
  }
});
