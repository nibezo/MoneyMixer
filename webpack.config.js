const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		filename: "./js/bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devServer: {
		port: 4200,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "index.html"),
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: "./src/icons", to: "./src/icons" }],
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			// load fonts for Webpack versions 5+
			{
				test: /\.(woff(2)?|ttf|eot)$/,
				type: "asset/resource",
				generator: {
					filename: "./fonts/[name][ext]",
				},
			},
		],
	},
};
