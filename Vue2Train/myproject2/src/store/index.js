import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },
  getters: {
  },
  mutations: {
    fetchArticles(state, articles) {
      state.articles = articles;
    },
    addArticle(state, article) {
      let newArticle = {
        id: 0,
        ...article
      };
  
      // Увеличиваем id существующих элементов на 1
      state.articles.forEach((item) => {
        item.id += 1;
      });

      state.articles.unshift(newArticle);
    }
  },
  actions: {
    fetchArticles(context) {
      fetch('./articles.json')
        .then(response => response.json())
        .then(articles => context.commit('fetchArticles', articles["articles"]));
        console.log('Fetch data');
    }
  },
  modules: {
  }
})
