const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		publicPath: '/',
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				}
			}
		}
	},
	resolve: {
		alias: {
			'jquery': 'jquery/dist/jquery.slim.js',
			'App': path.resolve(__dirname, 'src/'),
			'Components': path.resolve(__dirname, 'src/components'),
			'assets': path.resolve(__dirname, './assets'),
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				use: 'vue-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'eslint-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets',
						}
					},
				],
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(['./dist']),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			title: 'Song Manager',
			template: './src/html/index.html',
		}),
		new webpack.HashedModuleIdsPlugin(),
	],
};
