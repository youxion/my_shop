<template>
  <div>
    <GoodsItem :fashionImg="fashionImg"></GoodsItem>
    
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem.vue'
  export default {
    name: "GoodsList",
    components: {
      GoodsItem
    },
    props: {
      fashionImg: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>