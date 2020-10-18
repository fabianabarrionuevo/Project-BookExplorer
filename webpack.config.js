const path = require('path');
const WebpackDevServer = require('webpack-dev-server');

module.exports = {     
    entry: ['babel-polyfill', './app/index.js'],
    output : {          
        path: __dirname + "/build",         
        filename: "bundle.js"     
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
};
