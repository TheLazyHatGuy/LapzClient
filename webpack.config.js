const webpack = require("webpack");

module.exports = {
    context: __dirname + "/app/src",
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
                loader: 'sass-loader!css-loader!style-loader'
            }
        ]
    }
};
