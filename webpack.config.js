const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
  filename: './dist/cssloading.css',
  disable: process.env.NODE_ENV !== 'production'
})

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
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