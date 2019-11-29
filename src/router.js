import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from 'components/Login/Login.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/login*',
    component: Login
  }]
})

export default router