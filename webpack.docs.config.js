const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  mode: 'production',
  entry: './src/docs/index.tsx',
  output: {
    path: path.join(__dirname, '/docs'),
    filename: 'bundle.[hash].js',
    library: '',
    libraryTarget: 'commonjs',
    // publicPath: '' // Use this if you want to host your docs on a site; this is the path your assets will be hosted at
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
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              useRelativePath: true,
              name: '[name].[ext]',
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/docs/index.html',
    }),
  ],
};

module.exports = config;
