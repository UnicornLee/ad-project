const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfigBase = require('./webpack.base.config');

const webpackConfigDev = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash:4].css',
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
