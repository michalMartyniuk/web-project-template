const path = require("path");
const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  // plugins: [
  //   new BrowserSyncPlugin({
  //     host: "localhost",
  //     port: 7777,
  //     server: "./",
  //     files: "./index.html"
  //   }),

  //   new webpack.ProvidePlugin({
  //     $: "jquery",
  //     jQuery: "jquery"
  //   })
  // ],

  mode: "development",
  target: "node",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js"
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

