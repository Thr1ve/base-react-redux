/* eslint-disable */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var WebpackEnvPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify('production'),
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
    publicPath: '/assets'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    WebpackEnvPlugin,
    new webpack.optimize.OccurenceOrderPlugin(),
  ]
};
