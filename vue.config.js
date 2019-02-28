const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "dist",
  productionSourceMap: false,
  assetsDir: "assets",
  devServer: {
    host: "localhost",
    port: 2233,
    open: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("src", resolve("src"))
      .set("views", resolve("src/views"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"));
  }
};
