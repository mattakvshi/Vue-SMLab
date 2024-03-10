// Модуль. Используем для разгранечения областей хранилища.
import { Types } from './types.js';

const storage = {
    state: {
        articles: [],
        articlesAddStatus: Types.request_status.SUCCEEDED
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
        [Types.mutations.ARTICLE_ADD_REQUESTED](state) {
          state.articlesAddStatus = Types.request_status.REQUESTED;
        },
        [Types.mutations.ARTICLE_ADD_SUCCEDED](state) {
          state.articlesAddStatus = Types.request_status.SUCCEEDED;
          //state.articlesRequestStatus = Types.request_status.FAILED;
        },
        [Types.mutations.ARTICLE_ADD_FAILED](state) {
          state.articlesAddStatus = Types.request_status.FAILED;
        },

        [Types.mutations.ARTICLES_SUCCEEDED_2](state, articles) {
          //state.articlesRequestStatus = Types.request_status.SUCCEEDED;
          state.articles = articles;
          console.log(articles)
        },
        [Types.mutations.ADD_ARTICLE](state, article) {
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
        async [Types.actions.ADD_NEW_ARTICLE]({ commit }, newArticle) {
          commit(Types.mutations.ARTICLE_ADD_REQUESTED)
          setTimeout(3000);
          try{
            commit('ADD_ARTICLE', newArticle);
            commit(Types.mutations.ARTICLE_ADD_SUCCEDED);
          } catch {
            commit(Types.mutations.ARTICLE_ADD_FAILED);
          }
          
          
        }
      },
      modules: {
      }
}

export default storage;