const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
    entry: './src/',
    output: {
        path: path.join(__dirname, outputDirectory),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        /* Set rules for all jsx files to be compiled by babel loader */
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] /* make sure to include style-loader first */
            },

            /* so that we can load images properly */
            {
                test: /\.(ttf|eot|svg|gif|png|jpg|ico|bmp|txt|webmanifest|xml)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'file-loader'
                }]
            }

        ]
    },
    devServer: {
        host: '0.0.0.0',
        historyApiFallback: true,
        port: 80,
        open: false,
        proxy: {
            '/api': 'http://localhost:80'
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/app/index.html',
        })
    ]
}
