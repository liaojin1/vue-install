<template>
<div>
  <h1>Test1!</h1>
  <h1>{{$route.params.username}}</h1>
  <h2>{{$route.params.age}}</h2>
</div>
  
</template>

<script>
    export default{
      //在模板中调用
      beforeRouteEnter(to, from, next){
        console.log('beforRouteEnter');
        next();
      },
      beforeRouteLeave(to, from, next){
        console.log('beforeRouteLeave');
        next();
      },
      beforeRouteUpdate(to,from,next){
        
      }
    }
</script>

<style scoped>

</style>
