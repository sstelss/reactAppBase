const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./App",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'TagRun',
        template: 'index.html'
      })
  ],

  devServer: {
    port: 9000
  }
};