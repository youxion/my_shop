<template>
  <div class="Cart">
    <NavBar>
      <p slot="center">购物车 ({{cartListLen}}) </p>
      <!-- 注意：此处的（）一定要写在外面，将大胡子包住，若写在里面会被忽略掉 -->
    </NavBar>
    <scroll :scrollPosition="scrollPosition"
            class="setHeight"
            :probeType="3">
      <CartItemList></CartItemList>
    </scroll>
    <CartTotal>去结算({{cartListLen}})</CartTotal>

  </div>
</template>

<script>
  import NavBar from 'components/component/navBar/NavBar.vue'
  import CartItemList from 'views/cart/childComponents/CartItemList.vue'
  import scroll from 'components/component/scroll/Scroll.vue'
  import CartTotal from 'views/cart/childComponents/CartTotal.vue'

  import {mapGetters} from 'vuex'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartItemList,
      scroll,
      CartTotal,
    },
    data() {
      return {
        // cartList: ['actions', 'conponents', 'default', 'export']
      }
    },
    computed: {
      // /*cartListLen() {
      //   return this.$store.state.cartList.length
      // }*/
      ...mapGetters(['cartListLen']) //cartListLen为getters里面返回的计算函数名

    },
    methods: {
      scrollPosition(position) {
        console.log(position);

      }
    }
  }
</script>

<style scoped>
  .Cart {
    position: relative;
    height: 100vh;
  }
  .setHeight {
    height: calc(100% - 121px);
  }

</style>
