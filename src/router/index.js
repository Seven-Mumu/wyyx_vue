// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes'

// 解决报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 声明使用
Vue.use(VueRouter)
// 暴露
export default new VueRouter({
  mode: "history",
  routes
})