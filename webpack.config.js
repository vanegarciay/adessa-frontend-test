const path = require('path');
const webpack = require('webpack');
const WebpackBuildNotifier = require('webpack-build-notifier');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './static/js/apps/main.jsx'
  },
  output: {
    path: path.join(__dirname, 'static', 'js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['es2015', {modules: false}], 'react', 'stage-3']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new WebpackBuildNotifier()
  ]
};
