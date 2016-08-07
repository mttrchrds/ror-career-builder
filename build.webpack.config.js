const webpack = require('webpack');
const CONFIG = require('./path.config');
const combineLoaders = require('webpack-combine-loaders');
const autoprefixer = require('autoprefixer');
const simpleVars = require('postcss-simple-vars');
const atImport = require('postcss-import');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    CONFIG.source + CONFIG.sourcePath + CONFIG.sourcePathName
  ],
  output: {
    path: CONFIG.build + CONFIG.buildPath,
    filename: CONFIG.buildPathName,
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
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
        include: CONFIG.source + CONFIG.sourcePathSCSS
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
    return [atImport, simpleVars, autoprefixer];
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new ExtractTextPlugin('../css/styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};
