import path from 'path';
import webpack from 'webpack';

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: [
        'webpack-hot-middleware/client',
        SRC_DIR + "/client/index.js",
    ], 
    output: {
        //path: DIST_DIR, 
        //filename: "bundle.js",
        //publicPath: "/"
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test:/\.js?/,
            include: SRC_DIR,
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015", "stage-2"]
            }
        }]
    },
    resolve: {
        extensions: ['', '.js']
    }
}

module.exports = config;