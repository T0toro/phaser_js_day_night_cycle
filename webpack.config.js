'use strict';

const webpack = require('webpack'),
      path    = require('path'),
      phaserModule = path.join(__dirname, '/node_modules/phaser/'),
      phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
      pixi = path.join(phaserModule, 'build/custom/pixi.js'),
      p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    entry: {
        app: "./assets/ts/app.ts",
    },

    output: {
        path: `${__dirname}/assets/js/`,
        filename: "app.js",
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        alias: {
        'phaser': phaser,
        'pixi': pixi,
        'p2': p2,
        }
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.ts?$/, loader: "babel-loader?presets[]=es2015!ts-loader" },
            { test: /pixi\.js/, loader: 'expose?PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
            { test: /p2\.js/, loader: 'expose?p2' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
        }),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};