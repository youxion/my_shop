import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

Vue.prototype.$bus = new Vue()


// import store from './store'
// import {request} from './network/request'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// $mount('#app')等价于 el: "app" ,此处的app为主页下的id名
//render: h => h(App)中的app为app.vue中的组件id名，render会用它替换主页下的id名，最终让app.vue中的组件在主页显示出来。

