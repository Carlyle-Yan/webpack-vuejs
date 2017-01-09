// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer')

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
        index: path.resolve(__dirname, '../app/index/index.js'),
        vendors: [
            'Vue'
        ]
    },
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../output/static'),
        publicPath: 'static/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/, 
                loader: 'vue'   
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(scss|sass)$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2)(\?|$)/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url?limit=10000?name=images/[name].[ext]?[hash:7]'
            }
        ]
    },
    vue:{
        loaders:{
            js:'babel'
        }
    },
    babel:{
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        })
    ]
}
