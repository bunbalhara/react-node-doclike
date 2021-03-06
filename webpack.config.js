require('dotenv').config();

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 10000,
            minRemainingSize: 0,
            maxSize: 15000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            name: 'vendors',
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true
                },
                default: {
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
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
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 200000,
                            name: 'static/media/[name].[hash:8].[ext]',
                            esModule: false,
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    experiments: {
        topLevelAwait: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('./public/index.html'),
        }),
    ],
    resolve: {
        alias:{
            'Assets': path.resolve(__dirname, './src/assets'),
            'Components': path.resolve(__dirname, './src/components'),
            'Containers': path.resolve(__dirname, './src/containers'),
            'Config': path.resolve(__dirname, './src/config'),
            'Utils': path.resolve(__dirname, './src/utils'),
            'Context': path.resolve(__dirname, './src/context'),
            'Actions': path.resolve(__dirname, './src/store/actions'),
            'Pages': path.resolve(__dirname, './src/pages')
        }
    }
};
