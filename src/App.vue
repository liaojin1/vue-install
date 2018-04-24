<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/Test">Test</router-link>
      <router-link :to="{name:'Test1',params:{username:'liaojin',age:19}}">Test1</router-link>
      <router-link to="/Test/Test2">Test2</router-link>
      <router-link to="/TestUrl/5/zhangsan">TestUrl</router-link>
      <router-link to="/home/1/liaojin">home</router-link>
      <router-link to="/abc">alias别名</router-link>
      
      <router-view></router-view>
    </div>
    
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
