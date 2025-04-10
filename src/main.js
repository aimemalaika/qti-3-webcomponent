import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// Wrap the Vue component
const qtiElement = wrap(Vue, App)

// Define the custom element
window.customElements.define('qti-player', qtiElement)