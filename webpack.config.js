const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "none",
	entry: [
		__dirname + "/src/index.js",
		__dirname + "/src/scss/main.scss",
		__dirname + "/src/index.ts",
	],

	devtool: "inline-source-map",
	watch: true,

	plugins: [
		new BrowserSyncPlugin(
			{
				host: "localhost",
				port: 3000,
				files: ["./dist/*.html"],
				server: { baseDir: ["dist"] },
			},
			{
				reload: false,
			}
		),
	],

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},

	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};
