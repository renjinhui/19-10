<template>
    <el-container>
        <el-aside width="200px" style='background:#545c64;overflow:hidden'>
            <div class='asideBox'>
                <el-row class="tac">
                    <el-col>
                        <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="transparent"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                            <el-submenu index="1" v-for='(item,index) in menuList' :index='index' :key='index'>
                                <template slot="title">
                                <i class="el-icon-user"></i>
                                <span>{{item[0].meta.rootTil}}</span>
                                </template>
                                <el-menu-item 
                                    :index="index+'-'+i" 
                                    v-for='(v,i) in item'
                                    :key="index+'-'+i"
                                >{{v.meta.til}}</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
        </el-aside>
        <el-main>ORG====Main</el-main>
    </el-container>
</template>
<script>
// @ is an alias to /src
import ary from '@/router/org.js'
export default {
  name: "XXX",
  data() {
    return {
        menuList:[]
    };
  },
  created() {
      console.log(ary)
      let t = [ary[0]];// 把6项拆成3项
      ary.reduce((prev,cur)=>{
          if(prev.meta.type==cur.meta.type){
              t.push(cur)
          }else{
              this.menuList.push(t);
              t= [cur];
          }
          return cur
      })
      this.menuList.push(t);
      console.log(this.menuList)
    //   this.menuList = 
  },
  components: {}
};
</script>
<style lang="less">
    .asideBox{
        height: 100%;
        width: 110%;
        overflow-x: hidden;
        overflow-y: scroll;
    }
</style>