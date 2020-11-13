<template>
  <div class="nav-box">
    <Back></Back>
    <ul>
      <li v-for="(item, index) in navText"
          :key="item.id"
          :class="{active: index === currentIndex}"
          v-on:click="getText(index)">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  import Back from 'components/component/back/Back.vue'
  export default {
    name: "DetailNavBar",
    components: {
      Back
    },
    data() {
      return {
        navText: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      getText(index) {
        this.currentIndex = index;
        console.log('44444');
      }
    }
  }
</script>

<style scoped>
  .nav-box {
    position: relative;
    height: 40px;
    box-shadow: 0 2px 5px #0a0202;
  }
  ul {
    display: flex;
    width: 60%;
    margin: 0 auto;
  }
  li {
    height: 40px;
    line-height: 40px;
    flex: 1;
    font-size: 14px;

  }
  .active {
    color: red;

  }

</style>