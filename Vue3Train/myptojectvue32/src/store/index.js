import { createStore } from 'vuex'
 
const store = createStore({
  state: {
    articles: [],
  },
  getters: {
  getArticles: (state) => {
      return state.articles;
    }
  },
  mutations: {
    fetchArticlesMutation(state, articles) {
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
    async fetchArticles({ commit }) {
      const response = await fetch('./articles.json');
      const articles = await response.json();
      commit('fetchArticlesMutation', articles["articles"]);
      console.log('Fetch data')
    },
    
    async addNewArticle({ commit }, newArticle) {
      commit('addArticle', newArticle);
    }
  },
  modules: {
  }
})

export default store;