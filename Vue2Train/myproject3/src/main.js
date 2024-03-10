import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import PublicatedButton from './components/PublicatedButton.vue'

Vue.component('PublicatedButton', PublicatedButton)

Vue.config.productionTip = false

store.dispatch('ARTICLES_LOAD')
//store.commit('ARTICLE_ADD_SUCCEDED')

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
