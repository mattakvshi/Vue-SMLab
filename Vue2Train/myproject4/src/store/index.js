import Vue from 'vue'
import Vuex from 'vuex'
import load from './load.js';
import storage from './storage.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    load: load,
    storage: storage
  }
})
