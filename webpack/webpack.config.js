const { watch } = require("fs");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: 'production',
    entry: "./entry.js",
    optimization: {
        minimize: true,
    },
    output: {
        clean: true,
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    watchOptions: {
        ignored: ['**/node_modules'],
    },
    devServer: {
        port: 8080,
        hot: true,
        watchFiles: ['**src/backend/*'],
        static: [
            {
                directory: path.resolve(__dirname, "public"),
                watch: true,
                publicPath: '/'
            },
            {
                directory: path.resolve(__dirname, 'style'),
                watch: false,
                publicPath: '/style/',
                serveIndex: false,
                staticOptions: {

                }
            }
        ]
    }
}