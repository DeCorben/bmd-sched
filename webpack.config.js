const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    dir = path.join(__dirname,'test')

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        main: './test/shell.jsx'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(dir,'template.html'),
            title: 'BMD Sched Test'
        })
    ]
}