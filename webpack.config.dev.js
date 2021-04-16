const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

process.env.NODE_ENV = "development";

module.exports = merge(common, {
  devtool: "cheap-module-source-map",
  mode: "development",
  target: "web",
  devServer: {
    host: "0.0.0.0",
    port: 9000,
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
});
