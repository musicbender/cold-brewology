const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'eval',
  resolve: {
    extensions: ['.js', 'json'],
  },
  entry: {
    index: [path.join(__dirname, '/src/index.js')],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'dist.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx*$/,
        include: path.join(__dirname, '/src'),
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.pug/,
        loader: "pug-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ONSERVER': false,
        'LIVE': false,
        'NODE_ENV': JSON.stringify('development')
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html',
      inject: 'body',
      template: 'server/views/index.pug',
      title: 'Cold Brewology',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3777,
  },
  watch: true,
};

module.exports = config;
