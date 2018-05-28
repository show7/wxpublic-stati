const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 2000,
    publicPath: '/',
    open: true,
    openPage: '',
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
        secure: false,
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept && req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.')
            return '/index.html'
          } else {
            return false
          }
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境
    new webpack.NamedModulesPlugin(),
  ],
})