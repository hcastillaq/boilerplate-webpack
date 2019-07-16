const path = require('path');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const smp = new SpeedMeasurePlugin();
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
					test: /\.js$/,
					loader: 'babel-loader',
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
			]
	},
	resolve:
	{
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.vue', '.json'],
		alias: { vue: 'vue/dist/vue.esm.js' }
	},
	plugins:[
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
			analyzerMode: 'static'
		}),
		new VueLoaderPlugin()
	]
});