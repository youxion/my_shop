<template>
  <div class="week-box">
    <div class="week-fashion">本周流行</div>
    <ul>
      <li>
        <a href="https://act.mogujie.com/zzlx67">
          <img src="~assets/img/weekfashion/weekfashion_01.png" alt="">
          <p>霸街长袖裙</p>
        </a>
      </li>
      <li>
        <a href="https://act.mogujie.com/zzlx67">
          <img src="~assets/img/weekfashion/weekfashion_02.png" alt="">
          <p>时尚懒人套装</p>
        </a>
      </li>
      <li>
        <a href="https://act.mogujie.com/zzlx67">
          <img src="~assets/img/weekfashion/weekfashion_03.png" alt="">
          <p>微胖遮肉套装</p>
        </a>
      </li>
      <li>
        <a href="https://act.mogujie.com/zzlx67">
          <img src="~assets/img/weekfashion/weekfashion_04.png" alt="">
          <p>降温保暖鞋</p>
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="https://act.mogujie.com/zzlx67">
          <img src="~assets/img/weekfashion/weekfashion_05.png" alt="">
          <p>颜值爆表裙装</p>
        </a>
      </li>
      <li>
        <a href="https://act.mogujie.com/zzlx67">
          <img src="~assets/img/weekfashion/weekfashion_06.png" alt="">
          <p>小心机V领</p>
        </a>
      </li>
      <li>
        <a href="https://act.mogujie.com/zzlx67">
          <img src="~assets/img/weekfashion/weekfashion_07.png" alt="">
          <p>万圣节必备口红555555555555555555555555555</p>
        </a>
      </li>
      <li>
        <a href="https://act.mogujie.com/zzlx67">
          <img src="~assets/img/weekfashion/weekfashion_08.png" alt="">
          <p>软萌暖心包包</p>
        </a>
      </li>
    </ul>
  </div>
  
</template>

<script>
  export default {
    name: "WeekFashion"
  }
</script>

<style scoped>
  .week-box {
    margin-top: 10px;
    height: 206px;
    /*border: 1px solid red;*/
  }
  .week-fashion {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    color: #000;
  }
  ul {
    display: flex;
    margin-bottom: 10px;

  }
  li {
    flex: 1;

  }
  img {
    width: 60px;
    height: 60px;
  }
  p {   /* 单行文本溢出显示省略号 */
    width: 80px;  /* 注意：宽度一定要设置为px值，否则无效（百分比宽度也无效） */
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    word-break:keep-all


  }

</style>