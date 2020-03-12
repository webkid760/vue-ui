<template>
  <div id="app">
    <img src="./assets/logo.png">
    <saber-button @click='dialogVisible = true'><div slot="text">2222222</div></saber-button>


<saber-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  >
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <saber-button @click="dialogVisible = false">取 消</saber-button>
    <saber-button type="primary" @click="dialogVisible = false">确 定</saber-button>
  </span>
</saber-dialog>


    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      dialogVisible:false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
