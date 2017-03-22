var env = process.env.NODE_ENV
var dev = env !== 'production'
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var extractSass = new ExtractTextPlugin({
  filename: 'cssloading.css',
  disable: dev
})

module.exports = {
  entry: {
    'cssloading': !dev ? './src/cssloading.js' : ['./client', './src/cssloading.js']
  },
  output: {
    path: !dev ? path.join(__dirname, './dist') : '/',
    publicPath: !dev ? './dist' : '/',
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
    extractSass,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.tpl',
      inject: true
    })
  ]
}