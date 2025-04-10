import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

class QtiPlayerElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const mountPoint = document.createElement('div')
    this.shadowRoot.appendChild(mountPoint)

    const styleNodes = document.querySelectorAll('style')
    styleNodes.forEach(style => {
      this.shadowRoot.appendChild(style.cloneNode(true))
    })


    new Vue({
      render: h => h(App)
    }).$mount(mountPoint)
  }
}

customElements.define('qti-player', QtiPlayerElement)
