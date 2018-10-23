const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  // publicPath: process.env.VERSION ? `/script/rise_js/${process.env.VERSION}/` : `/rise_js/`,
  // 线上使用版本控制，为了清除用户的缓存，需要在此处添加参数，不然加载不到 chunkfile
  output: {
    publicPath: '/',
  },
})