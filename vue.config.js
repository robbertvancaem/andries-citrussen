module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/andries-citrussen/" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    }
  }
};
