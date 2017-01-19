const path = require("path");
const LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = {
  context: __dirname,
  entry: "./app/entry.jsx",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', `react`]
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};
