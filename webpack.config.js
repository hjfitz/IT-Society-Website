const Notifier = require('webpack-build-notifier');

const config = {
  entry: ['babel-polyfill', './src/router.jsx'],
  output: {
    path: `${__dirname}/build/public/js`,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }],
  },
  plugins: [
    new Notifier({ title: 'IT Soc Website' }),
  ],
};

module.exports = config;
