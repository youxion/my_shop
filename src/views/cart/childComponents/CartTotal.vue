<template>
  <div class="CartTotal clearfix">
    <div class="check-all" v-on:click="checkActive">
      <CheckButton class="check-btn" :class="{checkOn: isCheckOn}">

      </CheckButton>
      <span class="check-text">全选</span>
    </div>
    <div class="total">合计: <span>￥114.11</span></div>
    <div class="to-pay"><slot></slot></div>

  </div>
  
</template>

<script>
  import CheckButton from 'components/component/checkButton/CheckButton.vue'

  export default {
    name: "CartTotal",
    components: {
      CheckButton
    },
    data() {
      return {
        isCheckOn: false
      }

    },
    methods: {
      checkActive() {
        console.log('isCheckOn');
        this.isCheckOn = !this.isCheckOn

      }

    }
  }
</script>

<style scoped>
  .CartTotal {
    position: fixed;
    bottom: 49px;
    left: 0;
    width: 100%;
    height: 28px;
    line-height: 28px;
    background: #ccc;
    font-size: 14px;
    color: #000;


  }
  .check-all {
    float: left;
    width: 48px;
    height: 28px;
    line-height: 28px;
    /*background: url("~assets/img/cart/cart_check_n.svg") left center no-repeat;*/
    /*background-size: 18px 18px;*/
    text-align: right;
    margin: 0 20px 0 10px;


  }
  .check-btn {
    height: 100%;
  }
  .check-text {
    float: right;
    width: 30px;
    height: 100%;
  }
  .total {
    float: left;
    height: 28px;


  }
  .total span {
    color: red;
    font-size: 12px;
    font-weight: 800;


  }
  .to-pay {
    float: right;
    width: 85px;
    height: 28px;
    text-align: center;
    color: #fff;
    background: orangered;




  }
  .checkOn {
    background: url("~assets/img/cart/cart_check_y.svg") no-repeat center center;
    background-size: 18px 18px;
  }




</style>


