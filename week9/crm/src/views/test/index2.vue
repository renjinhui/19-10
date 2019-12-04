<template>
    <div>
        <input type="text" v-model='a'>
        <input type="text" v-model='b'>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    props:['value'],
    data() {
        return {
        
        }
    },
    computed: {
        a:{
            get(){
                return this.value.split(' ')[0]
            },
            set(val){
                let str = this.value.replace(/\w+ /,val+' ')
                this.$emit('input',str)
            }
        },
        b:{
            get(){
                return this.value.split(' ')[1]
            },
            set(val){
                let str = this.value.replace(/ \w+/,' '+val)
                this.$emit('input',str)
            }
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">

</style>