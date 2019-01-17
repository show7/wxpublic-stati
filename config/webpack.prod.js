const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false
    }),
  ],
})