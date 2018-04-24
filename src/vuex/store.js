import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//安装插件的必须使用vue的插件才能使用

const state = {//状态的池子,存状态
    count:0,

}

const mutations = {//改变状态，必须通过方法改变状态，不能直接count++
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}
//相当于计算属性
const getters={
    count(state){
        return state.count +=10
    }
}
//与mutations同步的
//action异步的
const actions = {
    addAction({commit}){
        commit('add',10);
    }
}
export default new Vuex.Store({//只有引入到这里才会起作用否则只是一个普通变量
    state,
    mutations,
    getters,
    actions
})