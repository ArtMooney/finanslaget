import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-04-28",
  devtools: { enabled: true },
  css: ["/assets/css/main.css"],

  ssr: false,

  app: {
    buildAssetsDir: "./",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  nitro: {
    output: {
      publicDir: "dist",
    },
    preset: "static",
    routeRules: {
      "/**": { static: true },
    },
    staticGeneration: {
      ignore: ["/_nuxt/**"],
    },
  },

  experimental: {
    appManifest: false,
    componentIslands: false,
    payloadExtraction: false,
    treeshakeClientOnly: true,
    inlineSSRStyles: false,
  },

  hooks: {
    "nitro:build:public": (nitro) => {},
  },

  routeRules: {
    "/**": { prerender: false },
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 51200,
      minify: "terser",
      rollupOptions: {
        output: {
          entryFileNames: "index.js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",

          inlineDynamicImports: true,
          manualChunks: undefined,
        },
      },
      manifest: false,
      emptyOutDir: true,
    },
  },

  runtimeConfig: {
    mailgunApiKey: process.env.NUXT_MAILGUN_API_KEY,
    emailFrom: process.env.NUXT_EMAIL_FROM,
    emailTo: process.env.NUXT_EMAIL_TO,
    userName: process.env.NUXT_USERNAME,
    userPass: process.env.NUXT_USERPASS,
    portalId: process.env.NUXT_PORTAL_ID,
    formId: process.env.NUXT_FORM_ID,

    public: {
      userName: process.env.NUXT_PUBLIC_USERNAME,
      userPass: process.env.NUXT_PUBLIC_USERPASS,
    },
  },

  modules: [],

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

  robots: {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
        comment: "Disallow all robots on .pages.dev and its subdomains",
      },
    ],
    disallowNonStandardSchemes: true,
    sitemap: "",
  },

  sitemap: {
    hostname: "",
    gzip: true,
  },
});
