<template>
    <el-container>
        <my-aside :ary='option'></my-aside>
        <el-main>CRM====Main</el-main>
    </el-container>
</template>
<script>
// @ is an alias to /src
import nav from '../components/nav'
import option from '@/router/customer.js'
export default {
    name: 'XXX',
    data() {
        return {
            option:option
        }
    },
    components: {
        'my-aside':nav
    }
}
</script>
<style lang="less">

</style>