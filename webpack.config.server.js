const path = require('path');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
	target: "node",
	mode: "development",
	entry:
	{
		app: "./server.js"
	},
	output:
	{
		filename: 'server.js',
		path: path.resolve(__dirname, './bin'),
		publicPath: '/public/',
	},
	module:
	{
		rules:
			[
				{
					test: /\.(js|ts|tsx)$/,
					loader: 'babel-loader',
				}
			]
	},
	resolve:
	{
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.json']
	},
	plugins:[
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
			analyzerMode: 'static'
		})
	]
});