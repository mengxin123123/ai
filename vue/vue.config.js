module.exports = {
  transpileDependencies: true,
  devServer: {
    port: 8080,
    host: "0.0.0.0",
    proxy: {
      '': {
        target: "http://localhost:9090",
        changOrigin: true,
        pathRewrite: { '': "" }
      }
    }
  },
  css: {
  loaderOptions: {
    postcss: {
      postcssOptions: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100,
            propList: ['*'],
            unitPrecision: 5,
            exclude: /node_modules/,
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 1
          })
        ]
      }
    }
  }
},
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    }
  }
}

