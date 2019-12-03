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
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.lt{
  float: left;
}
.rt{
  float: right
}
.cl::after{
  content: '';
  display: block;
  clear: both;
}
</style>
