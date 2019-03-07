const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  module: {
    rules: [
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader'
      // },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      },
    ]
  },
  devServer: {
    port: 18081
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
      template: path.resolve(__dirname, "./src/html/index.html"),
			minify: {
      	collapseWhitespace: true,
				removeComments: true
      }
    })
	]
}