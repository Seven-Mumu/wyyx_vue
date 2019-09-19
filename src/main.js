import Vue from 'vue'
import App from './App.vue'

// 引入router
import router from './router'

// rem适配库
import 'lib-flexible/flexible'
// 全局组件
import HeaderPersonal from './components/HeaderPersonal/HeaderPersonal'
Vue.component('HeaderPersonal', HeaderPersonal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
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