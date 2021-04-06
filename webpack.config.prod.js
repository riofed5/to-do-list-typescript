const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = "production";

module.exports = merge(common, {
  devtool: "source-map",
  mode: "production",
  target: "web",
  optimization: {
    minimize: true,
    minimizer: [
      //   new TerserPlugin({
      //     terserOptions: {
      //       ecma: undefined,
      //       warnings: false,
      //       parse: {},
      //       compress: {},
      //       mangle: true,
      //       module: false,
      //       output: null,
      //       toplevel: false,
      //       nameCache: null,
      //       ie8: false,
      //       keep_classnames: undefined,
      //       keep_fnames: false,
      //       safari10: false,
      //     },
      //   }),
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: "static" }),
    new MiniCssExtractPlugin({ filename: "styles.[hash].css" }),
  ],
});
