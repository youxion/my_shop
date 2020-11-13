<template>
  <div class="tab-box">
    <div class="tab-item" v-for="(item, index) in tittle"
         v-on:click="tabActive(index)"
         :class="{active: index == currentIndex}"
         :key="item.id">
      <span>{{item}}</span>
    </div>

  </div>
  
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      tittle: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0

      }
    },
    methods: {
      tabActive(index, item){
        this.currentIndex = index
        this.$emit('tabClick', index, item)

      }
    }
  }
</script>

<style scoped>
  .tab-box{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
  .tab-item{
    flex: 1;

  }
  .active span{
    color: red;
    border-bottom: 3px solid red;
    padding: 5px;  /* 注意：这里一定要有左右padding将border撑开，注意顶部的灰色才会露出来一点 */
    
  }


</style>