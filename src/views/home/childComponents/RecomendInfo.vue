<template>
  <ul>
    <li v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </li>
    



  </ul>

  
</template>

<script>
  export default {
    name: "RecomendInfo",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }

  }
</script>

<style scoped>

  ul {
    display:flex;
    width: 100%;
    padding: 15px 0;
    box-shadow: 0 4px 2px #2520209e;
    height: 108px;
  }
  li {
    flex: 1;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  img {
    width: 60px;
    height: 60px;
  }

</style>