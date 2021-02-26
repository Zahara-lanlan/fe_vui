import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import fe_vui from '../packages'

// 注册组件库
Vue.use(fe_vui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



