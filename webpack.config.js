const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist/lib'),
    filename: 'index.tsx',
    library: '',
    libraryTarget: 'commonjs',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};

// module.exports = {
//   entry: path.resolve(__dirname, 'src/index.js'),
//   output: {
//     path: path.resolve(__dirname, './dist/lib'),
//     filename: 'index.js',
//     library: '',
//     libraryTarget: 'commonjs',
//   },
//   externals: [nodeExternals()],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env', '@babel/react'],
//             },
//           },
//           { loader: 'eslint-loader' },
//         ],
//       },
//       {
//         test: /\.s?css/,
//         use: [
//           finalCSSLoader,
//           {
//             loader: 'css-loader',
//             options: {
//               sourceMap: true,
//             },
//           },
//           {
//             loader: 'postcss-loader',
//             options: {
//               plugins: () => [autoprefixer()],
//               sourceMap: true,
//             },
//           },
//           {
//             loader: 'sass-loader',
//             options: {
//               sourceMap: true,
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(jpe?g|png|gif|svg)$/,
//         use: [
//           'file-loader',
//           {
//             loader: 'image-webpack-loader',
//             options: {
//               useRelativePath: true,
//               name: '[name].[ext]',
//               mozjpeg: {
//                 progressive: true,
//                 quality: 65,
//               },
//               // optipng.enabled: false will disable optipng
//               optipng: {
//                 enabled: false,
//               },
//               pngquant: {
//                 quality: '65-90',
//                 speed: 4,
//               },
//               gifsicle: {
//                 interlaced: false,
//               },
//             },
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin(),
//   ],
// };
