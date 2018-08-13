import Vue from 'vue'
import App from './App.vue'

// Filtro global
Vue.filter('mayusculas', function(valor){
  return valor.toUpperCase();
})

new Vue({
  el: '#app',
  render: h => h(App)
})
