const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    port: 18080
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.min.js'
  },
	plugins: [
		new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
			minify: {
      	collapseWhitespace: true,
				removeComments: true
      }
    })
	]
};
