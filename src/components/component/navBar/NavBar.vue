<template>
  <div class="NavBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .NavBar{
    height: 44px;
    background: pink;
    display: flex;
    position: relative;
    z-index: 10;

  }
  .left, .right{
    width: 60px;
    height: 44px;
    background: pink;
  }
  .center{
    flex: 1;
    height: 44px;
    background: pink;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
    color: red;
  }

</style>