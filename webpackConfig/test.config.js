const webpack = require("webpack");
const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, '..', 'test/index.ts')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [{ loader: 'to-string-loader' }, {loader: 'css-loader'}, {loader: 'less-loader'}]
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.less' ]
  },
  mode: 'development',
  output: {
    filename: 'testCode.js',
    path: path.resolve(__dirname, '..', 'test', 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      con: path.resolve(__dirname, './../src/utils/console'),
      utils: path.resolve(__dirname, './../src/utils/general'),
      j: path.resolve(__dirname, './../src/utils/j'),
      api: path.resolve(__dirname, './../src/api/webextension'),
    }),
  ]
};
