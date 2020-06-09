const url = 'https://images-na.ssl-images-amazon.com/images/I/31hCCNVaoeL._AC_SY400_.jpg';
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
      { hid: 'og:image', property: 'og:image', content: url },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["ant-design-vue/dist/antd.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/antd-ui", "@/plugins/vue-scrollto", "@/plugins/axios"],
  /*
   ** Nuxt.js modules
   */
  modules: ["bootstrap-vue/nuxt"],
  /*
   ** Build configuration
   */
  build: {
    vendor: ["axios"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
