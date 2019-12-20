<template>
    <div class='progressBox'>
        <div class="box1" :style='{width:n+"%"}'></div>
        <div class="box2":style='{width:(100-n)+"%"}'></div>
        <input type="text" v-model="n">
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
            n:40
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">
  .progressBox{
    width: 300px;
    overflow: hidden;
    .box1{
      float: left;
      height: 20px;
      width: 40%;
      background: linear-gradient(to right, red , blue);
      transition: all 0.5s;
    }
    .box2{
      float: left;
      height: 20px;
      width: 50%;
      background: linear-gradient(to right,rgb(121, 216, 66) , rgb(22, 105, 116));
      transition: all 0.5s;
    }
  }
</style>