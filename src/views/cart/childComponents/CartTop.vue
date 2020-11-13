<template>
  <div class="cartTop">
    购物车 ({{cartListLen}}) <!-- 注意：此处的（）一定要写在外面，将大胡子包住，若写在里面会被忽略掉 -->
  </div>
</template>

<script>
  export default {
    name: "CartTop",
    data() {
      return {
        // cartList: ['actions', 'conponents', 'default', 'export']
      }
    },
    computed: {
      cartListLen() {
        return this.$store.state.cartList.length
      }

    }
  }
</script>

<style scoped>
  .cartTop {
    background: pink;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    color: red;
  }

</style>