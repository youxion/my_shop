<template>
  <div class="Scroll wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
  
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    dada() {
      return {
        betterSro: null
      }

    },
    props: {
      probeType: {
        type: Number,
        default() {
          return 1
        }
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    mounted() {
      /*
      * probeType属性：
      *   0,1 表示不监听滚动
      *   2 表示监听手指滚动，但是不监听惯性滚动
      *   3 表示监听手指滚动和惯性滚动
      * */

      this.betterSro = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType, //监听scroll事件必须设置。封装后要用props将probeType值传入Scorll.vue组件
        click: true, //监听点击事件时必须设置
        pullUpLoad: this.pullUpLoad  //监听pullingUp事件、使用函数时必需设置,封装后要用props将pullUpLoad值传入Scorll.vue组件
      })
      // console.log(this.betterSro)

      /* 监听滚动事件 */
      this.betterSro.on('scroll', (position) => {
        this.$emit('scrollPosition', position)
        //scrollPostion为发送给父组件的自定义事件（相当于click），position为传递的参数
      })

      /* 监听上拉事件(文档页面底部刚刚露出来时触发，即已加载的图片刚好全部显示完了，要开始加载下一页图片) */
      this.betterSro.on('pullingUp', () => {
        this.$emit('pullingUp')

      })

    },
    methods: {
      scrollTo(left, top, time=300) { /* 传入的time默认值为300 */
        this.betterSro.scrollTo(left, top, time)

      }
    }
  }
</script>

<style scoped>

</style>