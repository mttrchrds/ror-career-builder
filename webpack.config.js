const webpack = require('webpack');
const CONFIG = require('./path.config');

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
    //eslint preLoader
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint-loader',
    //     include: CONFIG.source + CONFIG.sourcePath
    //   }
    // ],
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
        loader: 'style-loader!css-loader!sass-loader!autoprefixer-loader',
        include: CONFIG.source + CONFIG.sourcePathSCSS
      },
      { test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000',
        include: CONFIG.build + CONFIG.imagePath
      }
    ]
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};