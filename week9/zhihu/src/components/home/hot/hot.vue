<template>
    <div class='hotBox'>
        <van-tabs type='card'>
            <van-tab v-for="index in 8" :title="'标签 ' + index">
                内容 {{ index }}
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
        
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">
    .hotBox{
        padding-top:3vw;
    }
</style>