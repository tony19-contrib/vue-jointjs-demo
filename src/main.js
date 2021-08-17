import Vue from 'vue'
import App from './App.vue'
import jointjs from './plugins/jointjs'

Vue.config.productionTip = false

Vue.use(jointjs)

new Vue({
  render: h => h(App),
}).$mount('#app')
