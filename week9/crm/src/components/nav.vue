<template>
    <el-aside width="200px" style='background:#545c64;overflow:hidden'>
        <div class='asideBox'>
            <el-row class="tac">
                <el-col>
                    <!-- :router='true'  -->
                    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="transparent">
                        <!-- //v-if='power.indexOf(item[0].meta.power)!=-1'  -->
                        <el-submenu class='mycolor' v-for='(item,index) in menuList' :index='index+""' :key='index'>
                            <template slot="title">
                                <i :class="item[0].meta.icon"></i>
                                <span>{{item[0].meta.rootTil}}</span>
                            </template>
                            <!-- :route="{path:v.path}" -->
                            <router-link tag='span' v-for='(v,i) in item' :to="v.path" :key="index+'-'+i">
                                <el-menu-item :index="index+'-'+i">{{v.meta.til}}</el-menu-item>
                            </router-link>

                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
    </el-aside>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  props:['ary'],
  data() {
    return {
      menuList: [],
      power: localStorage.getItem("power")
    };
  },
  created() {
    this.menuInit();
  },
  methods: {
    menuInit() {
    //   console.log(ary);
      let t = [this.ary[0]]; // 把6项拆成3项
      this.ary.reduce((prev, cur) => {
        if (prev.meta.type == cur.meta.type) {
          t.push(cur);
        } else {
          this.menuList.push(t);
          t = [cur];
        }
        return cur;
      });
      this.menuList.push(t);
      // 权限校验
      this.menuList = this.menuList.filter(item => {
        if (!this.power) return false; // 若不存在power 则数组为空即可
        return this.power.includes(item[0].meta.power);
      });
      console.log(this.menuList);
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.mycolor{
  span,li{
    color: #fff;
  } 
}
.router-link-active{
  .el-menu-item{
    color:rgb(23, 200, 245)
  }
}
.asideBox {
  height: 100%;
  width: 110%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>