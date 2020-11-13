import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Category = () => import('../views/category/Category.vue')
const Detail = () => import('../views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    /* 这个path路径可以任意写（不必遵照文档实际存放路径写），只要保证path与元素上写的路径一致就行了，
       元素被点击之后，会自动寻找路径对应的组件（index.js有路由映射关系），再将其显示出来 */
    path: '/home',
    component: Home
  },
  {
    path: '/index.html',
    component: Home
  },
  {
    // path: '/views/home'
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail:iid',
    component: Detail
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
