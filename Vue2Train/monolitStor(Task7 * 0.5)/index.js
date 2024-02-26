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
        .then(articles => context.commit('fetchArticles', articles["articles"]))
        .catch(error => {
          console.error('Error parsing JSON:', error);
          return []; // Возвращаем пустой массив в случае ошибки
        }).then(() => {
          if (this.state.articles.length) {
            console.log('Fetch data');
          } else {
            console.log('Not fetch data');
          }
        })
    },

    async addNewArticle({ commit }, newArticle) {
      commit('addArticle', newArticle);
    }
  },
  modules: {
  }
})
