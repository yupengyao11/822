const {
    VueLoaderPlugin
} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: 'bundle.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        port: 30000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset'
            },
            { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font-[name].[hash:6][ext]'
                }
            },
            { // 处理字体图标的解析
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2 * 1024,
                            // 配置输出的文件名
                            name: '[name].[ext]',
                            // 配置输出的文件目录
                            outputPath: "fonts/"
                        }
                    }
                ]
            },
            {
                test: /\.vue/i,
                use: ['vue-loader']
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    }
}
