/*
* 注意：mounted等生命周期里面的函数可以直接抽离出来，但是methods里面的函数不能
*       抽离，否则mixin.js里面的methods会覆盖掉引用组件里面的methods
* */


import BackTop from 'components/content/backTop/BackTop.vue'


export const mixinBackTop = {
  data() {  //这里面的数据会与引用组件里面的data进行合并
    return {
      isShowBackTop: false

    }
  },
  components: {
    BackTop
  },
  methods: {
    toTop() {
      console.log(this.$refs.scroll);
      this.$refs.scroll.scrollTo(0, 0, 500)

    }
  }/*,
  scrollPosition(position) {   //注意：子组件传过来的事件函数，不能抽离出来写在里面
    // console.log(position);
    this.isShowBackTop = -(position.y) > 500;
  }*/

}