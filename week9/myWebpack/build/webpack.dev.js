let path = require('path')
module.exports = {
  mode: 'development',
  devServer: {
    // 更改静态文件目录位置
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true, // 开启gzip
    port: 3000, // 更改端口号
  }
}