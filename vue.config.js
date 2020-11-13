module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets', // @ 表示src目录
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'store': '@/store',
        'common': '@/common'
      }
    }
  },
  devServer: {
    /*port: '8080',
    host: 'http://shibe.online/api/shibes',*/
    proxy: {
      '/api': { /*   /api 为代理地址，后台的node会解析为target的实际地址并进行跨域访问  */
        target: 'http://shibe.online/api/shibes', // 要访问的服务器地址，只要用到 /api 的地方，都会被解析为本条地址
        changeOrigin: true,  //允许跨域请求
        pathRewrite: {
          '^/api': ''



        }
      }
    },
    open: true,
    port: 8889
  }
  
  
}