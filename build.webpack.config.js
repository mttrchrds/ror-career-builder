const webpack = require('webpack');
const CONFIG = require('./path.config');
const autoprefixer = require('autoprefixer');

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
        loader: 'style-loader!css-loader!sass-loader!postcss-loader',
        include: CONFIG.source + CONFIG.sourcePathSCSS
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};