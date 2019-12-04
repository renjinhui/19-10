<template>
    <div>
        <my-loop v-permission="['a','b']" v-for='item in ary' :data='item' :key='item.til'></my-loop>
    
        <my-inp v-model='val'></my-inp>
        {{val}}
    </div>
</template>
<script>
// @ is an alias to /src
import QQQ from './index.vue'
import INP from './index2'
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
            ],
            val:'qqq www'
        }
    },
    components: {
        'my-loop':QQQ,
        'my-inp':INP
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