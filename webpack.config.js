var sassLintPlugin = require('sasslint-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }]
    },
    plugins: [
        new sassLintPlugin({
            configFile: '.sass-lint.yml',
            context: ['inherits from webpack'],
            ignoreFiles: [],
            ignorePlugins: [],
            glob: '**/*.scss',
            quiet: false,
            failOnWarning: false,
            failOnError: false,
            testing: false
        }),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
