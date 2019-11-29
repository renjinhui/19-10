<template>
    <div class='mainPage'>
        <div>
            <router-view></router-view>
        </div>
        <nav class='navBox'>
            <div>
                <router-link to="/home">
                    <i class='iconfont icon-11'></i>
                    <div>首页</div>
                </router-link>
            </div>
            <div>
                <router-link to="/vip">
                    <i class='iconfont icon-huiyuan-'></i>
                    <div>会员</div>
                </router-link>
            </div>
            <div>
                <i class='iconfont icon-yingyong-'></i>
            </div>
            <div>
                <router-link to="/notify">
                    <i class='iconfont icon-tongzhi'></i>
                    <div>通知</div>
                </router-link>
            </div>
            <div>
                <router-link to="/user">
                    <i class='iconfont icon-icon-user'></i>
                    <div>我的</div>
                </router-link>
            </div>
        </nav>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less" scoped>
//scoped 当前样式 只对当前模板 起作用
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18vw;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  > div {
    flex: 1;
    text-align: center;
  }
}
</style>