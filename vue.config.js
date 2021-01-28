// const path = require("path");
// const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  lintOnSave: true,
  // chainWebpack: (config) => {
  //   config.resolve.alias.set("vue$", "vue/dist/vue.esm.js");
  // },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js", // 用 webpack 1 时需用 'vue/dist/vue.common.js'
      },
    },
  },
};
