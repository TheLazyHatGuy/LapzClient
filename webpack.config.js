const webpack = require("webpack");

module.exports = {
    context: __dirname + "/app/js",
    entry: "./entry.js",

    node: {
        fs: 'empty'
    },

    output: {
        filename: "bundle.js",
        path: __dirname + "/build"
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
