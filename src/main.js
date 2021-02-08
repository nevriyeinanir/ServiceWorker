import Vue from 'vue'
import App from './App.vue'
import "./registerServiceWorker"
//export const EventBus =new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


