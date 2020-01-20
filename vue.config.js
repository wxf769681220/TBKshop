const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/client/' : './',
  outputDir: 'dist',
  assetsDir: 'common',
  indexPath: 'index.html',
  filenameHashing: true,
  pages: undefined,
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  //crossorigin: undefined,
  //integrity: false,
  css: {},
  pluginOptions: {},
  configureWebpack: config => {
    // 'plugins': [["import", {
    //   "libraryName": "iview",
    //   "libraryDirectory": "src/components"
    // }]]
  },
  chainWebpack: config => {
    // 解决 ie 浏览器报错无效字符
    config.module
      .rule('iview')
      .test(/iview.src.*?js$/)
      .use('babel')
      .loader('babel-loader')
      .end(),
    config.resolve.alias
    .set('api', path.join(__dirname, 'src/api'))
    .set('base', path.join(__dirname, 'src/base'))
    .set('common', path.join(__dirname, 'src/common'))
    .set('components', path.join(__dirname, 'src/components'))
  }
}