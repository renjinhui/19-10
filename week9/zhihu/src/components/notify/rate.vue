<template>
    <span class='rate_box'>
        <span ref='up' class="up" @mouseout="sure(value)">
            <i v-for='i in n' :class='"icon-"+(type||"start")' @mouseover="change(i)" @click='sure(i)' @touchstart='change(i)'></i>
        </span>
        <span class="down" :style="{width:width+'%'}">
            <i v-for='i in n' :class='"icon-"+(type||"start")+"_cover"'></i>
        </span>
    </span>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'notify',
    props:['n','value','type'],
    data() {
        return {
            width:0
        }
    },
    components: {
        
    },
    methods: {
        change(i){
            this.width = i/this.n*100
        },
        sure(i){
            this.change(i);
            // this.value = i;
            this.$emit('input',i)
        }
    },
}
</script>
<style lang="less">
    .rate_box{
        position: relative;
        .down{
            position: absolute;
            left: 0;
            top:0;
            overflow: hidden;
            display: block;
            transition: all 0.5s;
        }
        .up{
            position: relative;
            z-index: 12;
        }
    }
</style>