import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/components/Index'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
