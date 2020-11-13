import {request} from './request.js'

/* 请求首页的轮播图、推荐区域的数据 */
export function getHomeMutilData () {
  return request({    // request函数执行完之后，返回一个Promise对象，Promise对象可以调用then方法、catch方法
    url: '/home/multidata'
  }, 1)
}

/* 请求首页的时尚、爆款、优淘区域的商品列表数据 */
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  }, 1)
}

/* 请求https://shibe.online/ 网站的图片数据 */
export function getHomeImg() {
  return request({
    params: {
      count: 100
    },
    // headers:{'Access-Control-Allow-Origin:*'},
    // dataType: 'JSONP'
  }, 2)
}


