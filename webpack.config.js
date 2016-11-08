var webpack = require('webpack');

var config = {
  context: __dirname + '/app/public',
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: (process.env.NODE_ENV === 'production') ? 'build.min.js' : 'build.js'
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'raw', exclude: '/node_modules/'},
            {test: /\.css$/, loader: 'style!css', exclude: '/node_modules/'}
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })

    ],

    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
};

if(process.env.NODE_ENV === 'production'){
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;