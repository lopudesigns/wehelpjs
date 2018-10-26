'use strict';
const Visualizer = require('webpack-visualizer-plugin');
const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

require('dotenv').config()

const DEFAULTS = {
  isDevelopment: process.env.NODE_ENV !== 'production',
  baseDir: path.join(__dirname, '..'),
};

function makePlugins(options) {
  const isDevelopment = options.isDevelopment;

  let plugins = [
    new Visualizer({
      filename: './statistics.html'
    }),
  ];

  if (!isDevelopment) {
    plugins = plugins.concat([
			new webpack.optimize.AggressiveMergingPlugin(),
			new MinifyPlugin({}, {
				comments: false
			})
    ]);
  }
  return plugins;
}

function makeConfig(options) {
  if (!options) options = {};
  _.defaults(options, DEFAULTS);

  const isDevelopment = options.isDevelopment;
	console.log('ISDEV', isDevelopment)
  return {
    devtool: isDevelopment ? 'cheap-eval-source-map' : 'source-map',
    entry: {
      wehelpjs: path.join(options.baseDir, 'src/browser.js'),
      // 'wehelpjs-tests': path.join(options.baseDir, 'test/api.test.js'),
    },
    output: {
      path: path.join(options.baseDir, 'dist'),
      filename: '[name].min.js',
    },
    plugins: makePlugins(options),
    module: {
      rules: [
        {
					test: /\.js?$/,
					include: '/node_modules/',
					use: {
						loader: 'babel-loader'
					},
        },
        {
					test: /\.json?$/,
					include: '/node_modules/',
          use: {
						loader: 'json-loader'
					}
        },
      ],
		},
		// optimization: {
		// 	minimizer: [new UglifyJsPlugin({
		// 		test: /\.js(\?.*)?$/i,
		// 		sourceMap: true
		// 	})]
		// }
  };
}

if (!module.parent) {
  console.log(makeConfig({
    isDevelopment: process.env.NODE_ENV !== 'production',
  }));
}

exports = module.exports = makeConfig;
exports.DEFAULTS = DEFAULTS;
