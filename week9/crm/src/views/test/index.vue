<template>
    <div style='padding:0 50px' class="qwerewert">
        <h1>{{data.til}}</h1>
        <qqq v-for='i in data.children' :data='i' :key='i.til'></qqq>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'qqq',
    props:['data'],
    data() {
        return {
            
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">

</style>