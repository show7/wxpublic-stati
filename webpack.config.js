const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    entry: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  resolve: {},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/, // weui 引用
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(gif|jpg|png)$/,
        exclude: /node_modules/,
        use: ['url-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 2000,
    historyApiFallback: true,
    publicPath: '/',
  },
};