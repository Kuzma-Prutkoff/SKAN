const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    watchOptions: {
        ignored: /node_modules/,
    },
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./src/Public/index.html",
                filename: 'index.html'
            }
        )
    ],
    module: {
        rules: [
            {
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            use: {loader: "babel-loader"}
            },
            {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
            },
            {
            test: /\.(png|jpg)$/,
            use: {loader: 'url-loader', options: {limit: 200000 }}    // Картинка макс-размер = 200kb
            }
        ]
    }
}