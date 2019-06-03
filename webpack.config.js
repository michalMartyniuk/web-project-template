const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 7777,
      server: "./",
      files: "./index.html"
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],

  mode: "development",
  target: "node",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js" },

  module: {
    rules: [
      { test: /\.scss$/, 
        use: ["style-loader", "css-loader", "sass-loader"] },
        
      { test: /\.js$/,
        use: { 
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] }}}]}};

