<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {init} from '@/api/login.js'
export default {
  created() {
    console.log(this)
    init(this)
  },
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
</style>
