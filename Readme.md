webpack 基本的运行指令:

* webpack app/main.js public/bundle.js 
* 复杂的运行指令,需要配置文件:

webpack.config.js
```
module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  }
}
```

* 配置npm script run:

package.json
```
...
    script:{
        "start":"webpack" //必须是start , 特殊指令，会把后边的当成shell
    }
...
```

* 调试信息:

   devtool:'cheap-module-eval-source-map' //source-map,cheap-module-source-map,eval-source-map,cheap-module-eval-source-map, 打包越来越快，同时调试的信息越来越少

* loader 配置，针对不同的文件做不同的转换:

```
module:{
    loaders:[
        {
            test:/\.json$/
            ,loader:'json-loader' // loader 需要单独安装, npm install --save-dev json-loader
        }
    ]
}
```

* css加载到js里边:

```
module:{
    loaders:[
        {
            test:/\.css$/
            ,loader:'style-loader!css-loader' 
        }
    ]
}
```

* plugin 使用:

```
 ,plugins:[
        new webpack.BannerPlugin("Copyright xingyue @ 2017 ")//在这个数组中new一个就可以了
        ,new HtmlWebpackPlugin({
            template:__dirname + "/app/index.template.html"         //使用模板文件
        })
 ]

```


