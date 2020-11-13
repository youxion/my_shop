<template>
  <div id="app">
    <keep-alive exclude="Detail"> <!-- 离开当前详情页时将其销毁，下次进来重新创建，这样就可以加载不同详情页的数据 -->
      <!-- 在进行路由切换时，Vue会把切换前的组件销毁，切换回来时会重新创建该组件 -->
      <!-- 写了keep-alive后，在切换路由时，保证切换前的路由组件不被销毁，重新回来时还会看到 -->
      <router-view></router-view>
    </keep-alive>
    <MainTabBar class="homeFooterNav" v-show="isHomeActive"></MainTabBar>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainTabBar from './components/content/mainTabBar/MainTabBar.vue'

export default {
  name: 'app',
  components: {
    MainTabBar
  },
  data() {
    return {
      isHomeActive: true
    }
  },
  methods: {
    showHomeNav() {
      this.$bus.$on('linkToDetail', () => {
        this.isHomeActive = false
        console.log('this.isHomeActive444444444444444444444');

      })
    }

  }
}
</script>

<style>
/*@import './assets/css/base.css'; !* 最后的一个分号不能省略 *!*/
@import "./assets/css/reset.css";
@import "./assets/css/public.css";
</style>
