const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let loaders = [
	{
		"test": /\.js?$/,
		"exclude": /node_modules/,
		"loader": "babel"
	},
	{
		"test": /\.vue?$/,
		"loader": "vue"
	}
];

module.exports = [
	{
		entry: "./src/index",
		output: {
			path: "./dist",
			filename: "vue-formly-quasar-framework.js",
			library: "VueFormlyQuasarFramework",
			libraryTarget: "umd"
		},
		plugins: [
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify("production")
				}
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: false,
				mangle: false
			}),
			new webpack.optimize.DedupePlugin(),
			new ExtractTextPlugin("styles.css", {
				allChunks: true
			}),
		],
		module: {
			loaders: loaders
		},
		vue: {
			loaders: {
				css: ExtractTextPlugin.extract("css"),
				postcss: ExtractTextPlugin.extract("css"),
				sass: ExtractTextPlugin.extract("css!sass"),
			}
		},
		resolve: {
			packageAlias: "browser"
		}
	},
	{
		entry: "./src/index",
		output: {
			path: "./dist",
			filename: "vue-formly-quasar-framework.min.js",
			library: "VueFormly",
			libraryTarget: "umd"
		},
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			}),
			new webpack.optimize.DedupePlugin(),
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify("production")
				}
			})
		],
		module: {
			loaders: loaders
		},
		resolve: {
			packageAlias: "browser"
		}
	}
];
