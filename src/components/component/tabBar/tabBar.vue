<template>
  <div class="tab-bar">
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: 'tabBar'
}
</script>

<style scoped>
  .tab-bar {
    display: flex; /* =================== */
    /*flex-flow: row nowrap;
    justify-content: space-around;  !*  当flex-grow设为 1 时，主轴上所有的间隙都会被项目撑满 *!
    align-items: center;*/
    position: fixed;
    left: 0;
    bottom: 0;
    /*height: 100px;*/
    width: 100%;
    height: 49px;
    background: pink;
    /*box-shadow: 0 -1px 1px rgba(100,100,100,0.1);*/

  }
</style>
