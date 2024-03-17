const path = require('path'); 
const HTMLWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
    },
    plugin:[
        new HTMLWebpackPlugin({
            template:'./src/index.html',
        })
    ],
    module:{
        rules:[
            {
                test: /.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    option:{
                        preset:['@babel-preset-env', '@babel-preset-react']
                    }
                }
            }
        ]
    }
}