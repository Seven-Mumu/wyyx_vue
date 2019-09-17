import Vue from 'vue'
import App from './App.vue'

// 引入router
import router from './router'

// rem适配库
import 'lib-flexible/flexible'

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