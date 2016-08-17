const webpack = require('webpack');
const CONFIG = require('./path.config');
const combineLoaders = require('webpack-combine-loaders');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const calc = require('postcss-calc');
const nested = require('postcss-nested');
const values = require('postcss-modules-values');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    CONFIG.source + CONFIG.sourcePath + CONFIG.sourcePathName
  ],
  output: {
    path: CONFIG.build + CONFIG.buildPath,
    filename: CONFIG.buildPathName,
    contentBase: CONFIG.build,
    publicPath: '/js/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: CONFIG.source + CONFIG.sourcePath
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel?presets[]=react,presets[]=es2015'
        ],
        exclude: 'node_modules',
        include: CONFIG.source + CONFIG.sourcePath
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
        include: CONFIG.source + CONFIG.sourcePathSCSS
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader',
            include: CONFIG.source + CONFIG.sourcePathCSS
          },
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
      }
    ]
  },
  postcss: function () {
    return [atImport, nested, values, calc({mediaQueries: true}), autoprefixer];
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
