<template>
  <div class="detail-bot-nav">
    <div class="lft">
      <div class="serve">
        <span></span>
        <p>客服</p>
      </div>
      <div class="shops">
        <span></span>
        <p>店铺</p>
      </div>
      <div class="preserve">
        <span></span>
        <p>收藏</p>
      </div>

    </div>
    <div class="rht">
      <p class="addCart">加入购物车</p>
      <p class="buy">购买</p>
    </div>

  </div>
  
</template>

<script>
  export default {
    name: "DetailBottomNav"
  }
</script>

<style scoped>
  .detail-bot-nav {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    background: pink;
    z-index: 10;
    text-align: center;

  }
  .lft, .rht {
    display: flex;
    flex: 1;
  }
  .lft div {
    /*position: relative;*/
    flex: 1;
  }
  .lft div span{
    display: block;
    width: 24px;
    height: 24px;
    margin:  5px auto 0 auto;
    background-size: 24px 24px;

  }
  .lft p{
    height: 14px;
    line-height: 14px;
  }
  .serve span{
    background: url("~assets/img/detail/kefu.svg");
   /* position: absolute;
    left: 50%;
    transform: translateX(-50%);    !* calc(50% - 12px) *!*/
  }

  .shops span{
    background: url("~assets/img/detail/shops.svg");
  }
  .preserve span{
    background: url("~assets/img/detail/collect.svg");
  }
  .rht {
    display: flex;
  }
  .rht p{
    flex: 1;
    font-size: 14px;
    height: 100%;
    line-height: 49px;
    color: #fff;
  }
  .addCart{
    background: orangered;    
  }
  .buy{
    background: red;
  }

</style>