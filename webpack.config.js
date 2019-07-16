const path = require('path');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
	target: "web",
	mode: "development",
	entry:
	{
		app: "./index.js"
	},
	output:
	{
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, './public'),
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