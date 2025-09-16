const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    port:8080, //设置项目端口号这是vue项目端口
    host: "0.0.0.0", //允许所有的主机访问当前项目
    proxy: {
      '': { //正则匹配到以这个开头的时候 就用代理
        target: "http://localhost:9090",// 指向的是目标服务器
        changOrigin: true,  //允许跨域
        pathRewrite: {
          '': ""
        }
      }
    }
  }
}

