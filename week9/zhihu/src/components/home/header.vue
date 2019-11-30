<template>
    <div class='headerBox'>
        <div>
            <van-icon class='lt' name="tv-o" />
            <van-search placeholder="请输入搜索关键词" v-model="value" />   
            <van-icon class="rt" name="calender-o" />
        </div>
        <!-- <div class="headerTabBox">
            <ul>
                <li>
                    <router-link to="/home">关注</router-link>
                </li>
                <li>
                    <router-link to="/home">推荐</router-link>
                </li>
                <li>
                    <router-link to="/home">热榜</router-link>
                </li>
            </ul>

        </div> -->
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'myheader',
    data() {
        return {
            value:'',
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">
    .headerBox{
        >div:nth-child(1){
            display: flex;
            align-items: center;
            >.lt,>.rt{
                width: 13vw;
                text-align: right;
                font-size: 8vw;
            }
            >.rt{
                text-align: left
            }
            >div{
                flex: auto
            }
        }
        /* >.headerTabBox{
            padding:5vw 0;
            ul{
                display: flex;
                li{
                    flex: 1;
                }
            }
        }
        box-shadow: 2px 0px 12px 1px #bbb; */
    }
</style>