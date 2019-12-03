<template>
    <div>
        <my-loop v-permission="['a','b']" v-for='item in ary' :data='item' :key='item.til'></my-loop>
    </div>
</template>
<script>
// @ is an alias to /src
import QQQ from './index.vue'
export default {
    name: 'XXX',
    data() {
        return {
            ary:[
                {
                    til:'1',
                    children:[
                        {
                            til:'1-1',
                            children:[
                                {
                                    til:'1-1-1'
                                }
                            ]
                        },
                        {
                            til:'1-2'
                        }
                    ]
                },
                {
                    til:'2',
                    children:[
                        {
                            til:'2-1'
                        },
                        {
                            til:'2-2',
                            children:[
                                {
                                    til:'1-1-1'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    components: {
        'my-loop':QQQ
    },
    directives:{
        permission(){
            console.log(arguments[3])
        }
    }
}
</script>
<style lang="less">

</style>