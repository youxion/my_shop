<template>
  <div class="backImg-box" v-on:click="toPrePage">
    <img src="~assets/img/common/back.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "Back",
    methods:{
      toPrePage() {
        this.$router.back(-1)

      }
    }
  }

</script>

<style scoped>
  .backImg-box{
    position: absolute;
    left: 5%;
    top: 50%;
    margin-top: -11px;
    width: 22px;
    height: 22px;
  }

</style>