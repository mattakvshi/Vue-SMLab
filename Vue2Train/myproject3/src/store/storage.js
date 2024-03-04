// Модуль. Используем для разгранечения областей хранилища.
import { Types } from './types.js';

const storage = {
    state: {
        articles: []
      },
      getters: {
        getArticles: (state) => {
            return state.articles;
          }
      },
      mutations: {
        // fetchArticles(state, articles) {
        //   state.articles = articles;
        // },
        [Types.mutations.ARTICLES_SUCCEEDED_2](state, articles) {
          //state.articlesRequestStatus = Types.request_status.SUCCEEDED;
          state.articles = articles;
          console.log(articles)
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
        async addNewArticle({ commit }, newArticle) {
          commit('addArticle', newArticle);
        }
      },
      modules: {
      }
}

export default storage;