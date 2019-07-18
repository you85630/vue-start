const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  productionSourceMap: false,
  runtimeCompiler: true,
  assetsDir: 'assets',
  devServer: {
    host: 'localhost',
    port: 2334
  },
  configureWebpack: {
    resolve: {
      alias: {
        'src': path.join(__dirname, 'src'),
        'views': path.join(__dirname, 'src/views'),
        'assets': path.join(__dirname, 'src/assets'),
        'components': path.join(__dirname, 'src/components')
      }
    }
    // 打包取消注释
    // plugins: [
    //   new PrerenderSPAPlugin({
    //     staticDir: path.join(__dirname, 'dist'),
    //     routes: [
    //       '/',
    //     ],
    //     renderer: new Renderer({
    //       captureAfterTime: 50000,
    //       renderAfterDocumentEvent: 'render-event'
    //     })
    //   })
    // ]
  }
}
