const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    devtool: "source-map",

    entry: {
        index: "./src/scripts/index.tsx",
    },

    output: {
        filename: "scripts/[name].js",
        path: __dirname + "/build/"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },

    plugins: [
        new CopyPlugin([
            { context: "src/", from: 'public/**/*', to: '.' },
        ])
    ]
};