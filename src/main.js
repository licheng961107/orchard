import Vue from 'vue'
import App from './App'
import './config/date' // global filters
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()

// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })
