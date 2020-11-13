import axios from 'axios'


// axios的普通请求封装，参数config为一个对象形式的url，如：{url: '/home/multidata'}
export function request (config, serverNum) {  
  switch (serverNum) {
    /* 1号服务器 */
    case 1: {
        const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
      });
      return instance(config);
    }

    /* 2号服务器 */
    case 2: {
      const instance2 = axios.create({
        baseURL: '/api',  // 这里的 /api 只是一个代理，它会被解析为 vue.config.js 里面配置的 proxy 地址
        timeout: 5000
      });
      return instance2(config);
    }




  }
  /*const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })*/

/*  const instance2 = axios.create({
    baseURL: 'http://shibe.online/api/shibes',
    timeout: 5000
  })*/

  // 请求拦截：把正在发送的请求拦住，不让它发送出去。注意：此操作必须要写在请求函数中，否则无法截获数据。
 /* instance.interceptors.request.use(config => {
    console.log('-----我把你的请求拦截了，呵呵-------')
    console.log(config)
    return config // 把拦截的请求重新发送出去
  }, err => { // 拦截失败
    console.log('-----请求没拦住，哈哈-------')
    console.log(err)
  })

  // 响应拦截：把服务器发回来的数据拦住，不让它接收到。注意：此操作必须要写在请求函数中，否则无法截获数据。
  instance.interceptors.response.use(res => {       
    console.log('-----响应被拦截了-------')
    console.log(res)
    return res // 把拦截的响应数据重新发送给接收对象
  }, err => {
    console.log('-----响应没拦住-------')
    console.log(err)
  })*/

  // return instance(config)
  // instance函数会自动返回Promise对象，从而就可以在外面执行then方法和catch方法
  // 要知道instance的实现细节，需要查看源码


}

/*   request函数的调用方法:

    request({
      url: '/home/multidata'
    }).then(res => { // 封装的request函数执行之后，返回一个Promise对象，Promise对象再调用then方法、catch方法
      console.log('----成功数据------')
      console.log(res)
    }).catch(res => {
      console.log('----失败数据------')
      console.log(res)
    })

*/

/* export function interceptRequest (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

} */
