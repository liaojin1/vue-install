import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import Testurl from '@/components/TestUrl'




Vue.use(Router)

export default new Router({
  mode:'history',//消除path中的#
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld//对应import后的名字组件名
    },
    {
      path: '/Test',//注意路径必须带有'/',但是子路径就不用
      name: '/Test',
      component: Test,
      alias:'/abc',//别名

      //子路由
      children:[{
        path:'Test1',
        name:'Test1',//与router-link标签to中的name连用
        component:Test1
      },{
        path:'Test2',
        name:'Test2',
        component:Test2
      }]
    },{
      //params后可加(),括号中表示正则表达式，对参数进行格式要求
      //但是如果没有按照正则表达式进行传参,则会传输失败
      path:'/TestUrl/:userId(\\d+)/:username',//':'表示参数的意思，而且要顺序对应
      component:Testurl
    },{
      path:'/home/:userId(\\d+)/:username',
      // redirect:'/',//redirect对应path
      redirect:'/TestUrl/:userId(\\d+)/:username'//重定向带参数
      // component:HelloWorld
    }
  ]
})