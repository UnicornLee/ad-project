const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfigDev = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: true,
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'React APP',
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html'),
    }),
  ],
};

module.exports = merge(webpackConfigBase, webpackConfigDev);
