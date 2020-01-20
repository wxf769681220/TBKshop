import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('components/index')
const Detail = () => import('components/detail')
//const Test = () => import('base/test')

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },
    { path: '/detail', component: Detail }
  ]
})