<template>
  <ul class="clearfix">
    <li v-for="item in fashionImg" :key="item.id" v-on:click="toDetail">
      <!--<a href="">-->
        <!--<img :src="item" alt=" " v-on:load="loadImg">-->
      <img src="~assets/img/common/22.jpeg" alt="">
      <!--</a>-->
    </li>
  </ul>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      fashionImg: {
        type: Array,
        default() {
          return []

        }

      }


    },
    methods: {
      loadImg() {
        // console.log('loadImg');
        this.$bus.$emit('ItemImgLoad')
        //每张图片加载完成后，都向事件总线$bus发送一个ItemImgLoad事件，
        // 其他组件可以通过 bus.$on('ItemImgLoad', () =>{ }) 接收ItemImgLoad事件
      },
      toDetail() { //点击后跳转到 '/detail' 对应的路由组件
        this.$router.push('/detail' + '523')
        this.$bus.$emit('linkToDetail')
        //这里的 523 会自动成为 iid 的属性值，最后跳转的path会由 '/detail'  变成 '/detail523'
      }

    }
  }
</script>

<style scoped>
  ul {
    width: 100%;
    padding: 10px 2% 0 2%;
  }
  li {
    width: 49%;
    margin-bottom: 5px;
  }
  li:nth-child(2n){
    float: right;

  }
  li:nth-child(2n+1){
    float: left;

  }
  img {
    width: 100%;
    height: 150px;
  }

</style>