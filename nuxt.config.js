import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "propeller", content: "1d93abc91624fc5ed897984086239750" },

      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Sulphur+Point:wght@300;400;700&display=swap"
      }
    ],
    script: [
      {
        src: "https://roujonoa.net/pfe/current/tag.min.js?z=3524782",
        datacfasync: "false"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/highlight.js", "@/plugins/clipboard.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-171020251-1"
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["vue-social-sharing/nuxt"],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    theme: {
      light: true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {}
  }
};
