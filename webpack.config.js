var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
 
module.exports = {
 entry: "./src/index.js",
 devServer: {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 5000
},
 output: {
  path: path.resolve(__dirname, "dist"),
  filename: "index_bundle.js"
 },
 module: {
  rules: [
  {
    test: /\.js$/,
    use: "babel-loader"
  },
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
  }
 ]
 },
 mode: "development",
 plugins: [
  new htmlWebpackPlugin({
   template: "./public/index.html"
 })
 ]
};