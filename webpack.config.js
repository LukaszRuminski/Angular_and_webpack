'use strict';

var webpack = require('webpack'),
    path = require('path');
var APP =  path.join(__dirname, '/app');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    context: APP,
    entry: {
        app: ['webpack/hot/dev-server', './core/bootstrap.js']
    },
    output: {
        path: APP,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass?sourceMap")
            },
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract("style", "css")
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?presets[]=es2015!jshint',
                exclude: /node_modules|bower_components/
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg|jpg|png|gif)(\?]?.*)?$/,
                loader : 'file-loader?name=res/[name].[ext]?[hash]'
            },
            {
                test: /\.html/,
                loader: 'raw'
            },

            {
                test: /\.json/,
                loader: 'json'
            },
            {
                test: /jquery[\\\/]src[\\\/]selector\.js$/,
                loader: 'amd-define-factory-patcher-loader'
            },
            {
                test: /node_modules\/classie/,
                loader: 'imports?define=>undefined'
            },
        ]
    },
    resolve: {
        root: APP,
        alias: {
            jquery: "jquery/src/jquery"
        },
    },
    node: {
            child_process: 'empty'
        },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            MODE: {
                production: process.env.NODE_ENV === 'production'
            }
        }),
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new ModernizrWebpackPlugin(),
        // new webpack.optimize.UglifyJsPlugin()
    //     new CompressionPlugin({
    //         asset: "[path].gz[query]",
    //         algorithm: "gzip",
    //         test: /\.js$|\.css$|\.html$/,
    //         threshold: 10240,
    //         minRatio: 0.5
    //     })
    ],
    devServer: {
        inline:true,
        port: 7070
    },
};