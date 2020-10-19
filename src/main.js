import './assets/css/style.css'
import Vue from 'vue'
import App from './App.vue'

//import
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
