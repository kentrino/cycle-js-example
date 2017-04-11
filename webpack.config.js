const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  resolve: {
    extensions: [".ts", ".json", ".tsx", ".js"],
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },    
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
};
