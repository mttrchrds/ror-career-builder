const webpack = require('webpack');
const CONFIG = require('./path.config');

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
        loader: 'style-loader!css-loader!sass-loader!autoprefixer-loader',
        include: CONFIG.source + CONFIG.sourcePathSCSS
      },
      { test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000',
        include: CONFIG.build + CONFIG.imagePath
      }
    ]
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