// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    $production: {
      routeRules: {
        '/**': { isr: true }
      }
    },
    $development: {
      //
    }
  })

function defineNuxtConfig(arg0: { $production: { routeRules: { '/**': { isr: boolean; }; }; }; $development: {}; }) {
    throw new Error("Function not implemented.");
}


