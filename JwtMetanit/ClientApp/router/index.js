import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { routes } from './routes'


Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes,

})

export default router
