<template>
    <div class='loginBox'>
        
        <h2>CRM客户管理系统</h2>
        <h3>为保护企业的数据安全，请妥善保管密码</h3>
        <div>
            <el-input
                class='inp'
                placeholder="请输入用户名"
                prefix-icon="el-icon-user"
                v-model="name">
            </el-input>
            <el-input
                class='inp'
                placeholder="请输入密码"
                prefix-icon="el-icon-lock"
                show-password
                v-model="psw">
            </el-input>
            <el-button class='btn' type="primary" @click='login'>登录</el-button>
        </div>
        <p>北京珠峰世纪技术培训有限公司 京ICP备09041920号 京公网安备110108400531号</p>
    </div>
</template>
<script>
// @ is an alias to /src
import {login} from '@/api/login.js'
import md5 from 'md5'
export default {
    name: 'login',
    data() {
        return {
            name:'',
            psw:''
        }
    },
    components: {
        
    },
    methods: {
        login(){
            if(!this.name || !this.psw){
                this.$message.error('用户名密码不能为空');
                return;
            }
            let obj = {
               account:this.name,
               password:md5(this.psw)
            } 
            login(obj)
        }
    },
}
</script>
<style lang="less">
    .loginBox{
        width: 100%;
        height: 100%;
        text-align: center;
        background: #eee;
        position: fixed;
        top: 0;
        left: 0;
        h2{
            height: 60px;
            line-height: 60px;
            margin-top: 80px;
        }
        >div{
            width: 300px;
            // height: 200px;
            margin: auto;
            box-shadow: 11px 11px 23px 5px #ccc;
            background: #fff;
            padding-top: 20px;
            .inp{
                width: 80%;
                margin:5px auto;
            }
            .btn{
                margin: 20px 0;
                width: 80%;
            }
        }
        >p{
            position: absolute;
            bottom:10px;
            width: 100%;
            text-align: center;
        }
    }
</style>