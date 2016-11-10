const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname + "/app/src"),
    entry: "./entry.js",

    node: {
        fs: 'empty'
    },

    output: {
        filename: "bundled.js",
        path: __dirname + "/app/static/js"
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
