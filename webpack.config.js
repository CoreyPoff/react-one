var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "source");
var OUTPUT = path.resolve(__dirname, "build");

var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "app.js"
  },
  module: {
    loaders: [{
        include: DEV,
        loader: "babel-loader",
    }]
  }
};

module.exports = config;
