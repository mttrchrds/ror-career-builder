const webpack = require('webpack');
const CONFIG = require('./path.config');
const combineLoaders = require('webpack-combine-loaders');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const values = require('postcss-modules-values');
const nested = require('postcss-nested');
const calc = require('postcss-calc');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    CONFIG.source + CONFIG.sourcePath + CONFIG.sourcePathName
  ],
  output: {
    path: CONFIG.build,
    filename: CONFIG.buildPath + CONFIG.buildPathName,
    contentBase: CONFIG.build
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: 'node_modules',
        include: CONFIG.source + CONFIG.sourcePath,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          combineLoaders([
            {
              loader: 'css-loader',
              include: CONFIG.source + CONFIG.sourcePathCSS,
              query: {
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              include: CONFIG.source + CONFIG.sourcePathCSS
            }
          ])
        )
      }
    ]
  },
  postcss: function () {
    return [atImport, nested, values, calc({mediaQueries: true}), autoprefixer];
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('/css/styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      filename: CONFIG.build + '/index.html',
      template: CONFIG.source + CONFIG.sourcePathEJS + 'index.ejs',
    })
  ],
};
