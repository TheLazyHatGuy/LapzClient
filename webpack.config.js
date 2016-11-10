const webpack = require("webpack");

module.exports = {
    context: __dirname + "/app/js",
    entry: "./entry.js",

    node: {
        fs: 'empty'
    },

    output: {
        filename: "bundled.js",
        path: __dirname + "/app/js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};
