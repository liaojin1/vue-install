<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <!-- 编程式导航 -->
      <!-- 通过点击跳转类似于js中点击按钮跳转页面 @click==v-on;click后接的是函数名-->
      <button @click='home'>首页</button>
      <button @click='back'>前进</button>
      <button @click='forward'>后退</button>
    </div>
    <div>
      <!-- 通过a标签跳转 -->      
      <router-link to="/">首页</router-link>
      <router-link to="/Test">Test</router-link>
      <router-link :to="{name:'Test1',params:{username:'liaojin',age:19}}">Test1</router-link>
      <router-link to="/Test/Test2">Test2</router-link>
      <router-link to="/TestUrl/5/zhangsan">TestUrl</router-link>
      <router-link to="/home/1/liaojin">home</router-link>
      <router-link to="/abc">alias别名</router-link>
      
      <transition name="fade">
        <!-- 给router-view加动态效果如淡入淡出需要在外面套一个transition标签 -->
        <router-view/>     
      </transition>
    </div>
     </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    home(){
      //this.$router.push('/');//push中的参数与想跳转的path一致
      // this.$router.push({name:'Test1',params:{username:'liaojin',age:19}});
      this.$router.push('Test2');
    },
    forward(){
      this.$router.go(1);
    },
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>

.fade-enter{
  /* 进入过渡的开始状态，元素被插入时生效 */
  /* -enter前的名字为transition标签中name的名字 */
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition:opacity 1s;
}
.fade-leave{
  opacity:0;
}
.fade-leave-to{
  opacity: 1;
}
.fade-leave-active{
  transition:opacity 1s;  
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
