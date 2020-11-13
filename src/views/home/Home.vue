<template>
  <div class="home">  
    <NavBar class="navTop"><p slot="center">购物全球</p></NavBar>
    <TabControl class="TabControl2 relateiveTab"

                v-on:tabClick="tabClick"
                v-show="isTabShow"
                :tittle="['时尚', '爆款', '优淘']"></TabControl>    <!-- :class="{relateiveTab: fixedtop}"-->
    <Scroll class="mainCon"
            ref="scroll"
            :probeType="3" 
            :pullUpLoad="true"
            v-on:pullingUp="pullingUp"
            v-on:scrollPosition="scrollPosition">
      <HomeSwiper class='HomeSwiper' :banners="banners"></HomeSwiper>
      <RecomendInfo :recommends="recommends"></RecomendInfo>
      <WeekFashion></WeekFashion>
      <TabControl class="TabControl0"
                  v-on:tabClick="tabClick"
                  ref="TabControl0"
                  :tittle="['时尚', '爆款', '优淘']"></TabControl>
      <GoodsList :fashionImg="imgListCurrent"></GoodsList>
      <ul>
        <li>1列表</li>
        <li>2列表</li>
        <li>3列表</li>
        <li>4列表</li>
        <li>5列表</li>
        <li>6列表</li>
        <li>7列表</li>
        <li>8列表</li>
        <li>9列表</li>
        <li>10列表</li>
        <li>11列表</li>
        <li>12列表</li>
        <li>13列表</li>
        <li>14列表</li>
        <li>15列表</li>
        <li>16列表</li>
        <li>17列表</li>
        <li>18列表</li>
        <li>19列表</li>
        <li>20列表</li>
        <li>21列表</li>
        <li>22列表</li>
        <li>23列表</li>
        <li>24列表</li>
        <li>25列表</li>
        <li>26列表</li>
        <li>27列表</li>
        <li>28列表</li>
        <li>29列表</li>
        <li>30列表</li>
        <li>31列表</li>
        <li>32列表</li>
        <li>33列表</li>
        <li>34列表</li>
        <li>35列表</li>
        <li>36列表</li>
        <li>37列表</li>
        <li>38列表</li>
        <li>39列表</li>
        <li>40列表</li>
        <li>41列表</li>
        <li>42列表</li>
        <li>43列表</li>
        <li>44列表</li>
        <li>45列表</li>
        <li>46列表</li>
        <li>47列表</li>
        <li>48列表</li>
        <li>49列表</li>
        <li>50列表</li>
      </ul>

    </Scroll>
    <BackTop v-on:click.native="toTop" v-show="isShowBackTop"></BackTop>

   




  </div>
</template>

<script>
  import NavBar from 'components/component/navBar/NavBar.vue'
  import HomeSwiper from 'views/home/childComponents/HomeSwiper.vue'
  import RecomendInfo from 'views/home/childComponents/RecomendInfo.vue'
  import WeekFashion from 'views/home/childComponents/WeekFashion.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import Scroll from 'components/component/scroll/Scroll.vue'
  import BackTop from 'components/content/backTop/BackTop.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'



  import {
    getHomeMutilData,
    getHomeGoods,
    getHomeImg
  } from 'network/home.js'

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecomendInfo,
      WeekFashion,
      TabControl,
      Scroll,
      BackTop,
      GoodsList

    },
    data () {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: [] },
          'new': {page: 0, list: [] },
          'sell': {page: 0, list: [] }
        },
        goodsList:{
          fashionImg:{
            page: []
          },
          hotImg:{
            page: []
          },
          picked:{
            page: []
          }
        },
        betterSro: null,
        isShowBackTop: false,
        shibeImg: [] ,
        imgListCurrent: null,
        indexActive: null,
        type: 'fashionImg',
        num: 0,
        tabOffsetTop: 0,
        // fixedtop: true,
        isTabShow: false,
        homeScroll: 0


      }
    },
    created () {
      this.getHomeMutilData()
      this.getHomeGoods('pop', 1)
      this.getHomeImg()

    },
    activated() {  //点击home组件进入时
      console.log('activated');
      this.$refs.scroll.betterSro.scrollTo(0, this.homeScroll, 0) //滚动到离开之前的位置
      this.$refs.scroll.betterSro.refresh()  //滚动到指定位置之后，最好强制刷新一下content的高度，否则会出bug

    },
    deactivated() {  //点击其他组件，离开home组件时
      this.homeScroll = this.$refs.scroll.betterSro.y //将离开前的滚动位置保存起来
      console.log(this.homeScroll);


    },
    mounted() {
      const refreshDelay = this.debounce(500)

      //从事件总线$bus接收事件ItemImgLoad,
      // 注意：接收事件前，要在main.js中给vue的原型添加一个$bus属性，否则接收不到
      this.$bus.$on('ItemImgLoad', () => {
        // console.log('ItemImgLoad: ItemImgLoad:ItemImgLoad:ItemImgLoad:ItemImgLoad:ItemImgLoad:');
        // console.log( this);

        // console.log('ItemImgLoad');
        // this.$refs.scroll.betterSro.refresh()
        refreshDelay()
      })

      this.tabOffsetTop = this.$refs.TabControl0.$el.offsetTop  //保存TabControl0距离其定位父级的距离

    },
    methods: {
      getHomeMutilData() {
        getHomeMutilData().then(res => { // getHomeMutilData()执行完后返回一个Promise对象，然后可以使用then、catch方法。
          // console.log('getHomeMutilData: ');
          console.log(res);
          // console.log(res.data.data);
          //此处要将res进行存储，否则一旦getHomeMutilData函数执行结束，res变量就会被回收，里面的数据就会消失。
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        }).catch(err => {
          console.log(err);
        })
      },
      getHomeGoods(type, page) {
        getHomeGoods(type, page).then(res => {
          console.log(res);
          console.log(page);
          // this.goods[type].list.push(...res.data.list); //对获取到的数据进行解构（...的作用），再依次存入数组list中
          // this.goods[type].page += 1;

        }).catch(err => {
          console.log(err);
        })
      },
      getHomeImg() {
        getHomeImg().then(res => {
          console.log('===========getHomeImg=====================');
          // console.log(res);
          // console.log(res.data);
          this.shibeImg.push(...res.data)
          // this.goodsList.fashionImg = this.shibeImg.splice(0, 30)
          /*this.goodsList.hotImg = this.shibeImg.splice(0, 30)
          this.goodsList.picked = this.shibeImg.splice(0, this.shibeImg.length)*/

          this.goodsList.fashionImg.page[0] = this.shibeImg.splice(0, 10)
          this.goodsList.fashionImg.page[1] = this.shibeImg.splice(0, 10)
          this.goodsList.fashionImg.page[2] = this.shibeImg.splice(0, 10)
          this.goodsList.hotImg.page[0] = this.shibeImg.splice(0, 10)
          this.goodsList.hotImg.page[1] = this.shibeImg.splice(0, 10)
          this.goodsList.hotImg.page[2] = this.shibeImg.splice(0, 10)
          this.goodsList.picked.page[0] = this.shibeImg.splice(0, 10)
          this.goodsList.picked.page[1] = this.shibeImg.splice(0, 10)
          this.goodsList.picked.page[2] = this.shibeImg.splice(0, 10)






          // this.imgListCurrent = this.goodsList.fashionImg //初始化当前图片列表
          this.imgListCurrent = this.goodsList.fashionImg.page[0] //初始化当前图片列表

          console.log('===========shibeImg=====================');
          // console.log(this.shibeImg);

          /*console.log(this.goodsList.fashionImg);
          console.log(this.goodsList.hotImg);
          console.log(this.goodsList.picked);*/

        }).catch(err => {
          console.log(err);
        })

      },

      /* 切换不同的图片列表进行显示 */
      tabClick(index, item) {
        this.indexActive = index;
        this.type = item;
         switch (index) {
           case 0: this.imgListCurrent = this.goodsList.fashionImg.page[0]
              break;
           case 1: this.imgListCurrent = this.goodsList.hotImg.page[0]
              break;
           case 2: this.imgListCurrent = this.goodsList.picked.page[0]
              break;

        }
        console.log('===========imgListCurrent=====================');
        // console.log(this.imgListCurrent);


      },

      toTop() {
        // console.log(this.$refs.scroll.betterSro);
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      scrollPosition(position) { //position为子组件通过emit传递过来的数据
        // console.log( -(position.y));
        this.isShowBackTop = -(position.y) > 1000; //滚动距离达到1000就将BackTop显示出来
        this.isTabShow = -(position.y) >= this.tabOffsetTop  //为真就赋值true，否则赋值为false

      },
      pullingUp() {             
        console.log('上拉加载更多')
        // console.log(this.goodsList['fashionImg']);
        // console.log(this.type);
        this.num++
        console.log(this.num);
        // console.log(this.goodsList[this.type].page.length);
        if(this.num > this.goodsList[this.type].page.length) {
          console.log('我是有底线的');
          return

        }

        // console.log(this.goodsList[this.type]);
        this.imgListCurrent.push(...this.goodsList[this.type].page[this.num]) //初始化当前图片列表

        this.$refs.scroll.betterSro.finishPullUp()
        //结束当前上拉操作，只有结束当前的上拉(调用finishPullUp)，才能开始下一次上拉操作，否则永远只能上拉一次

        // this.$refs.scroll.betterSro.refresh()
        // 上拉加载下页的图片后，content元素的高度会增加，refresh函数实现对content的高度进行刷新，便于后续的文档操作
      },

      /* 防抖函数，即传入一个函数后，后让其延迟一定时间执行。本质上就是封装了一层setTimeout */
      debounce(delay) {
        let that = this
        let timer = null;
        return function() {  // ...args表示可以传入多个参数

          if (timer) {clearTimeout(timer)}  //若timer存在，则清空，开始一个新的定时器 timer ? timer.clearTimeout() : ''
          timer = setTimeout(function() {
            that.$refs.scroll.betterSro.refresh()
            console.log('ItemImgLoad');
          }, delay)
        }
      }


    }
  }

</script>

<style scoped>
  .navTop{
    width: 100%;
    background: pink;
    /*box-shadow: 0 1px 2px #c1a4a9;*/
    color: #fff;
  }
  .home {
    position: relative;
    height: 100vh;  /* vh为可视口的高度，即viewport height，100vh表示为可视口的100%高度 */
  }
  .tabFixed{
    /* 只适用于移动端开发，IE不适用 */
    /* 原理：鼠标滚动时，检测tabFixed的位置，当它离浏效区顶部44px时，将position改为固定定位 */
  /*  position: sticky;*/
  /*  top: 44px;*/
  /*  background: #fff;*/
  }



 /* .wrapper{
    background: deeppink;
    width: 100%;
    height: 200px;
  }*/
  .mainCon{  /* 给元素在垂直方向定位，注意：不要设置高度、宽度 */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
     overflow: hidden;

  }
  .HomeSwiper {
    height: 167px;
  }
  .TabControl0{
    margin-top: 5px;
  }
  .TabControl2{
    background: #fff;

  }
  .relateiveTab {
    position: relative; /* 使用relative可以使showTab的位置保持不变，同时还可以改变它的层级 */
    z-index: 100;

  }




  
</style>
