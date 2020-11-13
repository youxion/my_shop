<template>
  <Swiper>
    <SwiperItem v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/component/swiper/index.js'

  export default {
    name: "HomeSwiper",
    props: {  //定义子组件接收数据的类型，写在子组件中
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper, 
      SwiperItem
    }
  }
</script>

<style scoped>

</style>