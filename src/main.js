import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui'

import router from '@/router.js'
// Vue.use(ElementUI)

Vue.config.productionTip = false

//权限
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')