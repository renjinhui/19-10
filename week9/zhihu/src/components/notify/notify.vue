<template>
    <div>
        <my-rate class='rate' :n=6 v-model='index' :type='type'></my-rate>
        
        <button v-for='item in ary' :class='"btn icon-"+item' @click='type=item'></button>
        <!-- <qqq></qqq> -->
        <sku></sku>
    </div>
</template>
<script>
// @ is an alias to /src
import Rate from './rate'
import qqq from './pace'
import sku from './sku'
export default {
    name: 'notify',
    data() {
        return {
            index:0,
            type:'xin',
            ary:['zan','xin','star']
        }
    },
    components: {
        'my-rate':Rate,
        qqq,
        sku
    },
    methods: {
        
    },
}
</script>
<style lang="less">
    .rate{
        font-size: 30px;
        color:red
    }
    .btn{
        font-size: 30px;
    }
</style>