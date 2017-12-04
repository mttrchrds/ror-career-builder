module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-calc')(
      { mediaQueries: true }
    ),
    require('postcss-modules-values'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano')(
      { preset: 'default' }
    )
  ]
}