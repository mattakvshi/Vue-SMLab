import { Types } from './types.js';
import { loadArticles } from '@/servise/index.js';
import axios from 'axios';

const load = {
    state: {
        articlesRequestStatus: Types.request_status.FAILED,
        articleError: null,
    },
    mutations: {
        // setErrorFalse(state) {
        //     state.loadError = false;
        // },
        // setErrorTrue(state) {
        //     state.loadError = true;
        // },
        [Types.mutations.ARTICLES_REQUESTED](state) {
          state.articlesRequestStatus = Types.request_status.REQUESTED;
        },

        [Types.mutations.ARTICLES_SUCCEEDED](state) {
          state.articlesRequestStatus = Types.request_status.SUCCEEDED;
          //state.articlesRequestStatus = Types.request_status.FAILED;
        },

        [Types.mutations.ARTICLES_FAILED](state, error) {
          state.articlesRequestStatus = Types.request_status.FAILED;
          state.articlesError = error;
        },

        [Types.mutations.ARTICLES_CANCELED](state) {
          state.articlesRequestStatus = Types.request_status.CANCELED;
        }, 
    },
      actions: {
        async [Types.actions.ARTICLES_LOAD]({ commit }) {
          commit(Types.mutations.ARTICLES_REQUESTED);
          
          const cancelToken = axios.CancelToken.source();
          
          try {
            const articles = await loadArticles(cancelToken.token);
            console.log(articles)
            console.log(cancelToken.token)
            commit(Types.mutations.ARTICLES_SUCCEEDED);
            commit(Types.mutations.ARTICLES_SUCCEEDED_2, articles);
          } catch (error) {
            commit(Types.mutations.ARTICLES_FAILED, error);
          }
            return cancelToken;
          },

          [Types.actions.ARTICLES_LOAD_CANCEL]({ commit, dispatch }) {
            const cancelToken = dispatch(Types.actions.ARTICLES_LOAD);
            cancelToken.cancel('Загрузка отменена');
            commit(Types.mutations.ARTICLES_CANCELED);
          }, 
      },
      modules: {
      }
}

export default load;