var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool:'cheap-module-eval-source-map' //source-map,cheap-module-source-map,eval-source-map,cheap-module-eval-source-map, 打包越来越快，同时调试的信息越来越少
    ,entry:__dirname + '/app/main.js'
    ,output:{
        path:__dirname + '/build/'
        ,filename:'bundle.js'
    }
    ,module:{
        loaders:[
            {
                test:/\.json$/
                ,loader:'json-loader'
            }
            ,{
                test:/\.css$/ 
                ,loader:'style-loader!css-loader'
            }
        ]
    }
    ,devServer:{
        contentBase:"./public/"
        ,colors:true
        ,historyApiFallback:true
        ,inline:true 
    }
    ,plugins:[
        new webpack.BannerPlugin("Copyright xingyue @ 2017 ")//在这个数组中new一个就可以了
        ,new HtmlWebpackPlugin({
            template:__dirname + "/app/index.template.html"        
        })
        ,new webpack.optimize.UglifyJsPlugin()
    ]
} 
