const Notifier = require('webpack-build-notifier');
const JSDocify = require('jsdoc-webpack-plugin');

const config = {
  entry: ['babel-polyfill', './src/client-components/router.jsx'],
  output: {
    path: `${__dirname}/build/public/js`,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
    }],
  },
  plugins: [
    new Notifier({ title: 'IT Soc Website' }),
//    new JSDocify({
//     conf: './jsdoc.conf',
//    }),
  ],
};

module.exports = config;
