import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-04-28",
  devtools: { enabled: true },
  css: ["/assets/css/main.css"],

  ssr: false,
  app: {
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 51200,
      rollupOptions: {
        output: {
          manualChunks: () => "app.js",
        },
      },
    },
  },

  nitro: {
    preset: "cloudflare-pages",
    output: {
      singleChunk: true,
    },
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      ignore: [],
    },
  },

  runtimeConfig: {
    mailgunApiKey: process.env.NUXT_MAILGUN_API_KEY,
    emailFrom: process.env.NUXT_EMAIL_FROM,
    emailTo: process.env.NUXT_EMAIL_TO,
    userName: process.env.NUXT_USERNAME,
    userPass: process.env.NUXT_USERPASS,

    public: {
      userName: process.env.NUXT_PUBLIC_USERNAME,
      userPass: process.env.NUXT_PUBLIC_USERPASS,
      baseUrl: "/",
      apiBase: "https://finanslaget.pages.dev",
    },
  },

  modules: ["@nuxt/image", "@nuxt/icon"],

  image: {
    dir: "assets/images",
    format: ["webp", "jpg", "png"],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    densities: [1, 2],
    modifiers: {
      format: "webp",
      quality: 80,
      animated: false,
    },
    staticFilename: "[name]-[width]-[height]-[format].[ext]",
    provider: "ipxStatic",
  },
});
