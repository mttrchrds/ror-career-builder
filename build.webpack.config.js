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
      }
    ]
  },
  devtool: 'eval'
};