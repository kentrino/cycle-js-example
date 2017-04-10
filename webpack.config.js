const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    modules: [
      path.join(__dirname, './src'),
      // WTF
      "node_modules"
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/]
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
};
