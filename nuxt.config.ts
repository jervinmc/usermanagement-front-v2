// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig:{
    currencyKey: '',
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }

  },
  modules: [
    [
      '@pinia/nuxt',{
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))

      })
    },
    //...
  ],
  plugins:['~/plugins/axios',],
  
  srcDir: "interfaces/",
  imports:{
    dirs:['stores']
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
