<template>
  <div class="CartItemList">
      <ul>
        <li>
          <div class="info-box clearfix">
            <CheckButton class="check"></CheckButton>
            <img src="~assets/img/cart/discount1.jpg" alt="">
            <div class="item-info">
              <p class="tittle-big">2020春季新款韩版女装超级折扣价</p>
              <p class="tittle-sml text-ellipsis">你的飘逸新款，可以带着一起去春游了</p>
              <div class="price-num" clearfix>
                <span class="price fl">￥68.00</span>
                <span class="num fr ">x2</span>
              </div>

            </div>
          </div>
        </li>
        <li>
          <div class="info-box clearfix">
            <CheckButton class="check"></CheckButton>
            <img src="~assets/img/cart/discount1.jpg" alt="">
            <div class="item-info">
              <p class="tittle-big">2020春季新款韩版女装超级折扣价</p>
              <p class="tittle-sml text-ellipsis">你的飘逸新款，可以带着一起去春游了</p>
              <div class="price-num" clearfix>
                <span class="price fl">￥68.00</span>
                <span class="num fr ">x2</span>
              </div>

            </div>
          </div>
        </li>
        <li>
          <div class="info-box clearfix">
            <CheckButton class="check"></CheckButton>
            <img src="~assets/img/cart/discount1.jpg" alt="">
            <div class="item-info">
              <p class="tittle-big">2020春季新款韩版女装超级折扣价</p>
              <p class="tittle-sml text-ellipsis">你的飘逸新款，可以带着一起去春游了</p>
              <div class="price-num" clearfix>
                <span class="price fl">￥68.00</span>
                <span class="num fr ">x2</span>
              </div>

            </div>
          </div>
        </li>
      </ul>
      <div>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
        <p>测试标签</p>
      </div>

  </div>
  
</template>

<script>
  import CheckButton from 'components/component/checkButton/CheckButton.vue'

  export default {
    name: "CartItemList",
    components: {
      CheckButton
    }
  }
</script>

<style scoped>
  .info-box {
    width: 300px;
    margin: 0 auto;

  }
  .CartItemList li {
    padding: 10px 0;
    border-bottom: 5px solid #eac7c773;
    border-left: 2px solid #eac7c773;
    border-right: 2px solid #eac7c773;


  }
  .check {
    float: left;
    margin-right: 5px;
    height: 84px;

  }
  li:nth-child(1) {
    border-top: 5px solid #eac7c773;

  }
  .CartItemList img {
    float: left;
    width: 64px;
    height: 84px;
    margin-right: 10px;
  }
  .item-info {
    float: left;
    width: 202px;
    height: 84px;
  }
  .tittle-big{
    font-size: 14px;
    line-height: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 500;
    color: #000;
    margin-bottom: 10px;
  }
  .tittle-sml{
    line-height: 14px;
    margin-bottom: 20px;
  }
  .price {
    color: orangered;
    font-size: 14px;

  }
  .num {
    color: #000;
    font-size: 14px;
  }

</style>