const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
  filename: 'cssloading.css',
  disable: process.env.NODE_ENV !== 'production'
})

module.exports = {
  entry: {
    'cssloading': './src/cssloading.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: 'dist',
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: extractSass.extract({
        fallback: 'style-loader',
        use: 'css-loader!postcss-loader!sass-loader'
      })
    }]
  },
  plugins: [
    extractSass
  ],
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    watchContentBase: false,
    noInfo: true,
    host: '0.0.0.0',
    port: 9000
  }
}