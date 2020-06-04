const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'dev';

const config = {
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: IS_DEV
                    ? [
                          'style-loader',
                          {
                              loader: 'css-loader',
                              options: {}
                          },
                          {
                              loader: 'sass-loader',
                              options: {}
                          }
                      ]
                    : ExtractTextPlugin.extract({
                          fallback: 'style-loader',
                          use: ['css-loader', 'sass-loader']
                      })
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]'
                    }
                  }
                ]
            },
            {
                test: /\.(gif|png|ico|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[path][name].[ext]?[hash:7]',
                            context: 'src'
                        }
                    },
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         limit: 8192,
                    //         name: '[path][name].[ext]?[hash:7]',
                    //         context: 'src',
                    //         outputPath: 'images',
                    //     }
                    // },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            mozjpeg: {
                                progressive: true,
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                loaders: ['html-loader', 'pug-html-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'windows.jQuery': 'jquery'
        }),
        new CopyWebpackPlugin([
            {
                from: './public',
                to: ''
            }
        ]),
        new HtmlWebPackPlugin({
            template: 'src/index.pug',
            favicon: './public/favicons.png',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('css/styles.css')
    ]
};

if (!IS_DEV) {
    config.plugins.push(
        new UglifyJsPlugin({
            sourceMap: false
        })
    );
}

module.exports = config;
