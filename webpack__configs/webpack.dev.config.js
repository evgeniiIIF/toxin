const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");

const devWebpackConfig = merge(baseWebpackConfig, {
	// DEV config
	// mode: "development",
	devtool: "inline-source-map",
	devServer: {
		port: 9000,
		// contentBase: baseWebpackConfig.externals.paths.dist,
		hot: false,
		liveReload: true,
		static: { directory: path.join(__dirname, "/dist/") },
		compress: true,
		client: {
			// overlay: true,
			overlay: {
				warnings: true,
				errors: true,
			},
		},
	},
	// devtool: false,
	// plugins: [
	// 	new webpack.SourceMapDevToolPlugin({
	// 		filename: "[file].map",
	// 	}),
	// ],
});

module.exports = new Promise((resolve, reject) => {
	resolve(devWebpackConfig);
});
