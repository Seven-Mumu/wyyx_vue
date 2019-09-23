import Vue from 'vue'
import App from './App.vue'

// 引入router
import router from './router'
// 引入store
import store from './store'
// 引入mock
import './mock/mock'

// rem适配库
import 'lib-flexible/flexible'
// 全局组件
import HeaderPersonal from './components/HeaderPersonal/HeaderPersonal'
import HeaderSlot from './components/HeaderSlot/HeaderSlot'
Vue.component('HeaderPersonal', HeaderPersonal)
Vue.component('HeaderSlot', HeaderSlot)

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {
//     App
//   },
//   template: '<App/>',
//   router
// })