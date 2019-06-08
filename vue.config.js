const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'http://aldur.co.kr/drag-n-capture/dist/' : '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}