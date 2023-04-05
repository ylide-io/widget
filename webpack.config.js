const path = require('path')

const output = isMinimized => {
	return {
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
			library: {
				name: 'Ylide',
				type: 'umd',
				export: 'default',
			},
			filename: `index${isMinimized ? '.min' : ''}.js`,
			path: path.resolve(__dirname, 'dist'),
		},
	}
}

module.exports = [output(), output(true)]
