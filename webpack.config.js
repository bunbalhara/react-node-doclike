require('dotenv').config();

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./index.html'),
        }),
    ],
    resolve: {
        alias:{
            'Components': path.resolve(__dirname, './src/components'),
            'Container': path.resolve(__dirname, './src/containers'),
            'Config': path.resolve(__dirname, './src/config'),
            'Utils': path.resolve(__dirname, './src/utils'),
            'Context': path.resolve(__dirname, './src/context'),
            'Actions': path.resolve(__dirname, './src/store/actions')
        }
    }
};
