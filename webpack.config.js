var config = {
  context: __dirname + '/app/public',
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'raw', exclude: '/node_modules/'},
            {test: /\.css$/, loader: 'style!css', exclude: '/node_modules/'}
        ]
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
};

if(process.env.NODE_ENV === 'production'){
    config.output.path = __dirname + '/dist'
}

module.exports = config;