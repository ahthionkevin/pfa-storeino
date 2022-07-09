export default {
  head: {
    title: "palest-theme",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: []
  },
  target: "server",
  css: ["~/assets/css/icons.css", "~/assets/css/main.css"],
  plugins: [
    "~/plugins/tools.js",
    "~/plugins/http.js",
    "~/plugins/storeino.js",
    "~/plugins/init.js",
    "~/plugins/events.js",
    "~/plugins/fontawesome.js",
    { src: "~/plugins/vue-confetti.js", mode: "client" }
  ],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/fontawesome", "@nuxtjs/svg"],
  modules: ["@nuxtjs/axios"],
  fontawesome: {
    components: "fa",
    icons: {
      solid: true,
      brands: true
    }
  },
  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    },
    fileLoader: {
      // file-loader options
    }
  },
  axios: {},
  pwa: {
    manifest: {
      lang: "en"
    }
  },
  serverMiddleware: ["~/server/index"],
  server: {
    port: 3000,
    host: "0.0.0.0"
  },
  build: {}
};
