var output = './public';
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StatsPlugin = require("stats-webpack-plugin");
var loadersByExtension = require("./loadersByExtension");

module.exports = {
  entry: {
    'bundle': './app/app.jsx'
  },

  output: {
    path: output,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.json'],
  },

  module: {
    loaders: [
      { test: /\.js/, loader: 'babel', exclude: /node_modules/ }
    ]
  },

};
