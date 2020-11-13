<template>
  <div class="detail">
    <DetailNavBar class="detailNav"></DetailNavBar>
    <Scroll :probeType="3"
            ref="scroll"
            v-on:scrollPosition="scrollPosition"
            class="detailCon-wrap">
      <DetailSwiper>detail-swiper</DetailSwiper>

      <ul>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </ul>



    </Scroll>
    <BackTop v-on:click.native="toTop" v-show="isShowBackTop"></BackTop>
    <DetailBottomNav></DetailBottomNav>
    <div class="footer"></div>
  </div>
  
</template>

<script>
  import DetailNavBar from 'views/detail/childComps/DetailNavBar.vue'
  import DetailSwiper from 'views/detail/childComps/DetailSwiper.vue'
  import Scroll from 'components/component/scroll/Scroll.vue'
  import DetailBottomNav from 'views/detail/childComps/DetailBottomNav.vue'
  // import BackTop from 'components/content/backTop/BackTop.vue'
  import {mixinBackTop} from 'common/mixin.js'


  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      Scroll,
      DetailBottomNav,
    },
    /*data() {
      return {
        isShowBackTop: false

    }
    },*/
    methods: {
      scrollPosition(position) {  //注意：这个函数不能抽离出来写在mixin.js里面
        // console.log(position);
        this.isShowBackTop = -(position.y) > 500;
      }
    },
    mixins: [mixinBackTop]
  }
</script>

<style scoped>
  .detailNav {
    position: relative; /* relative不会使元素脱离文档流， */
    z-index: 10;
    background: #fff;
  }
  .detail{  /* 这个类加给scroll标签的父级元素 */
    height: 100vh;
  }
  .detailCon-wrap { /* 这个类加给scroll标签 */
    height: calc(100% - 89px); /*  100%是指为其父级高度的100%（父级设为100vh） */
  }
 

</style>