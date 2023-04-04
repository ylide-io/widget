const webpack = require('webpack')
const path = require('path')

const output = isMinimized => {
	return env => ({
		mode: 'production',
		optimization: {
			minimize: !!isMinimized,
		},
		entry: './src/index.ts',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		output: {
			filename: `ylide-widget${isMinimized ? '.min' : ''}.js`,
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
			new webpack.DefinePlugin({
				YLIDE_URL: JSON.stringify(env.YLIDE_URL || 'https://hub.ylide.io'),
			}),
		],
	})
}

module.exports = [output(), output(true)]
