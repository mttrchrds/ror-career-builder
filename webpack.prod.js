const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./config');

module.exports = {
  entry: [
    // Required for using functions such as .findIndex in the client
    'babel-polyfill',
    config.pathSource + config.pathJSAbsolute + config.filenameEntry
  ],
  output: {
    filename: config.pathJSRelative + config.filenameOutput,
    path: config.pathOutput
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        // We want to extract our CSS into it's own .css file
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            },
            { loader: 'postcss-loader' }
          ]
        })
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader'
          }
        ]
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    // Uglify all the things
    new uglifyJSPlugin({
      sourceMap: true
    }),
    // Really helps to keep file size down
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // Use our own Handlebars template for index.html, add hashes to the links, don't automatically inject links (we do it manually)
    new htmlWebpackPlugin({
      ga: process.env.GOOGLE_ID || '1234',
      hash: true,
      inject: false,
      template: config.pathSource + config.pathSourceTemplate + config.filenameTemplate,
      filename: config.filenameHTML
    }),
    // Create a separate CSS file in the appropriate folder
    new extractTextPlugin({
      filename: config.pathCSSRelative + config.filenameCSS,
      ignoreOrder: true
    })
  ]
};