var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");

var config = {
  entry: DEV + "/index.js",
  output: {
    path: OUTPUT,
    filename: "mycode.js"
  }
};

module.exports = config;