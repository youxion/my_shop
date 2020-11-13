<template>
  <div class="tab-bar-item" v-on:click="changePage">
    <div v-if="!isActive">
      <slot name="pic"></slot>
    </div>
    <div v-else>
      <slot name="pic-active"></slot>
    </div>
    <div :style="styleColor">
      <slot name="text"></slot>
    </div>
    <!-- <img src="" alt="">
     你好-->
  </div>

</template>

<script>
export default {
  name: 'tabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red' // 若父组件未传值，就默认选用该值
    }
  },
  data () {
    return {
      // isActive: false

    }
  },
  computed: { //只要路由切换，computed函数就会被执行
    isActive () {// isActive函数作用：没找到对应的路径，计算结果为false ，找到了计算结果为true
      return this.$route.path.indexOf(this.path) !== -1
      // 初始化的返回值为true（等号两边不等，左边匹配到了字符串，激活状态）
      // this.$route.path代表当前被激活的路径，若在它里面能找到本组件上定义的this.path，
      // 则表示当前组件被点击，要改变其颜色
    // 当前被激活的路径，表示当前被改变的路径，若路径不被改变就不会被激活，如：一开始加载空路径时被改成了/home,处于激活状态
    },
    styleColor () {
      return this.isActive ? {color: this.activeColor} : {} // 处于激活状态就返回父组件传过来的activeColor值
    }

  },
  methods: {
    changePage () {   //只要一点击，就会切换路由，此时isActive ()函数就会执行一次（computed里面的所有函数都是如此）。
      this.$router.replace(this.path) // 用本组件上定义好的path，去替换当前路径，最后切换到对应的组件
    }
  }

  //每个组件在路由中都定义了自己的唯一path地址,点击A时要想显示某个组件，
  // 只需要将该组件的path地址写在A上即可，再给A加一个点击事件，进行path路径的变换

}
</script>

<style scoped>
  .tab-bar-item{
   /*width: 50px;*/
   height: 49px;
   text-align: center;
   /*flex: 0 1 auto; !* 后两个值基本不不变，主要是改变最前面的那个值 *!*/
   flex: 1;      /* =================== */
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;  /* 去掉图片自带的周边间隙 */
  }
  /*.active{
    color: red;
  }*/
</style>
