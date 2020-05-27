<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
      <siderbar/>
      </el-aside>
      <el-container>
        <el-header><headerbar/></el-header>
        <el-main><router-view></router-view></el-main>
<!--        <el-footer>Footer</el-footer>-->

      </el-container>
    </el-container>
  </div>
</template>

<script>
  import siderbar from "./components/common/tabbar/siderbar";
  import Headerbar from "./components/common/headerbar/headerbar";

export default {
  name: 'App',
  components: {
    Headerbar,
    siderbar
  }
}
</script>

<style>
  #app{
    height: 100%;
  }
</style>
