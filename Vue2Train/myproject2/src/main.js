import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PublicatedButton from './components/PublicatedButton.vue'

Vue.component('PublicatedButton', PublicatedButton)

Vue.config.productionTip = false

new Vue({
  data: store.state,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
