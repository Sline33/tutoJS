import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#myApplication',
  template: '<App/>',
  components: { App },
  data: {
      attributeA: 'valueA',
      attributeB: 'valueB'
  }
})

// on affiches les attribues de l'objet data
alert(vm.$data.attributeA) // valueA
alert(vm.$el.id) // value B