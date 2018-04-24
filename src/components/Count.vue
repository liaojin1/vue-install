// 组件文件首字母大写

<template>
<div>
    <h1>{{$store.state.count}}</h1>

    <!-- 声明了计算属性 -->
    <h1>{{computedCount}}</h1>
    
  <button @click="$store.commit('add')">add</button>
  <!-- 如果$store.commit('add',2)add后面传了一个2参数则每次加2 -->
  <button @click="$store.commit('reduce')">reduce</button>
  <!-- <button @click="reduce">reduce</button> -->

  <button @click='addAction'>addAction</button>
  <button @click='dis'>dispatch</button>
  
</div>
</template>

<script>
import store from '@/vuex/store.js'//使用$store之前需要引入
import {mapState, mapGetters, mapActions} from 'vuex'
import {mapState,mapMutations,mapGetters} from 'vuex'//把store中的Mutations映射到这个文件里来使click可以直接调用方法并不是调用$store.commit('reduce')
//同理getters也需要映射引入
export default {
  store,
//   computed:{
//       computedCount(){
//           return this.$store.state.count;
//       }
//   }

  computed:mapState({
      computedCount:state => state.count
  }),

//   computed:mapState(['count']),//此时上面标签中引入变量需要引入count
computed:{
    ...mapState(['count']),
    ...mapGetters(['count'])

},
//   methods:mapMutations(['add','reduce'])
methods: {
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction']),
    dis(){
        this.$store.dispatch('addAction');
    }
} 

}
</script>

<style scoped>

</style>
