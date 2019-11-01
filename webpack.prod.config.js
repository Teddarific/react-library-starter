const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '/dist/lib'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.html', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
};

module.exports = config;
