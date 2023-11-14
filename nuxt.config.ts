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
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-icon"],
  hooks: {
    "components:dirs": (dirs) => {
      dirs.unshift({
        path: "~/components/ui",
        extensions: [".vue"],
        prefix: "Ui",
        pathPrefix: false
      });
    }
  }
});
