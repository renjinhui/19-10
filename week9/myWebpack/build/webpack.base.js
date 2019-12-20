let path = require('path');
let hp = require('html-webpack-plugin');
let dev = require('./webpack.dev')
let prod = require('./webpack.prod')
const base = {
  entry:'./src/index.js',
  output:{
    filename:'main.js',
    path:path.resolve(__dirname,'../dist')
  },
  plugins:[
    new hp({
      template:'./public/index.html', // 指定渲染的html模板
      // filename:'my.html'  指定生成的html文件的名字 默认跟模板名字相同
    })
  ],
  module:{
    rules:[
      {
        test:/\.js$/,
        use:['babel-loader'],// 需要配置 .babelrc  或者 babel.config.js
        exclude:/node_modules/ // 排除的文件
      }
    ]
  }
}

module.exports = (env)=>{
  if(env.production){
    // 说明是生产环境  也就是运行的脚本是 npm run build
    return Object.assign(prod,base)
  }else{
    // 说明是开发环境  也就是运行的脚本是 npm run serve
    return Object.assign(dev,base)
  }
}