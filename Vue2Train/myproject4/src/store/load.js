import { Types } from './types.js';
import { loadArticles } from '@/servise/index.js';
//import axios from 'axios';

let controller =  new AbortController();

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
          if(state.artivleRequestStatus !== Types.request_status.CANCELED){
            state.articlesRequestStatus = Types.request_status.FAILED;
            state.articlesError = error;
          }
        },

        [Types.mutations.ARTICLES_CANCELED](state) {
          state.articlesRequestStatus = Types.request_status.CANCELED;
        }, 
    },
      actions: {
        async [Types.actions.ARTICLES_LOAD]({ commit }) {
          commit(Types.mutations.ARTICLES_REQUESTED);
          
          //const cancelToken = axios.CancelToken.source();
          controller =  new AbortController();
          
          try {
            const articles = await loadArticles(controller.signal);
            console.log(articles)
            console.log(controller.signal)
            //console.log(cancelToken.token)
            commit(Types.mutations.ARTICLES_SUCCEEDED);
            commit(Types.mutations.ARTICLES_SUCCEEDED_2, articles);
          } catch (error) {
            commit(Types.mutations.ARTICLES_FAILED, error);
          }
            //return cancelToken;
          },

          [Types.actions.ARTICLES_LOAD_CANCEL]({ commit}) {
            //const cancelToken = dispatch(Types.actions.ARTICLES_LOAD);
            //cancelToken.cancel();
            commit(Types.mutations.ARTICLES_CANCELED);
            controller.abort();
          }, 
      },
      modules: {
      }
}

export default load;