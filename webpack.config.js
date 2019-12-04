const path = require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
  //模式 ：生产环境
  //入口
entry:{
  index:path.resolve(__dirname,'src/index.js')
},
  //出口
output:{
  filename:'static/js/[name].bundle.js',
  path:path.resolve(__dirname,'dist')
},
  //模块加载器
module:{
rules:[
  //处理es6
{test:/\.js$/,
  include:path.resolve(__dirname,'src'),
use:{
  loader:'babel-loader',
  options:{
    presets:['@babel/preset-env']//预设包
  }

}
},
//处理css
{
  test:/\.css$/,
  use:['style-loader', 'css-loader'],

},
//处理图片
{
  test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader:'url-loader',
  options:{
    limit:8000,
    name:'static/img/[name].[hash:7].[ext]'
  //相对于output.path
  },
}
]
},
  //插件
  plugins:[
    new HtmlWebpackPlugin(
      {template:'index.html',
       filename:'index.html'

      },
    )
  ],
  //配置开发服务器
  devServer:{
    open:true,//自动打开浏览器
    quiet:true,
  },
  //配置source-map
  devtool:'cheap-module-eval-source-map',


}