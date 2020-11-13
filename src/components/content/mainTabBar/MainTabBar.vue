<template>
    <tabBar>
      <tabBarItem path="/home"> <!-- 把App.vue里面的path对应的属性值传递给子组件tabBarItem -->
        <img slot="pic" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="pic-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <p slot="text">首页</p>
      </tabBarItem>
      <tabBarItem path="/category" activeColor="red">
        <img slot="pic" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="pic-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <p slot="text">分类</p>
      </tabBarItem>
      <tabBarItem path="/cart" activeColor="red">
        <img slot="pic" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="pic-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <p slot="text">购物车</p>
      </tabBarItem>
      <tabBarItem path="/profile" activeColor="red">
        <img slot="pic" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="pic-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <p slot="text">我的</p>
      </tabBarItem>

    </tabBar>
</template>

<script>
import tabBar from 'components/component/tabBar/tabBar.vue'
import tabBarItem from 'components/component/tabBar/tabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style scoped>

</style>
