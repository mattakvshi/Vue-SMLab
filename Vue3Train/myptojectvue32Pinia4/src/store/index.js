//В этой версии проекта мы реализовали хранилище на Pinia

import { defineStore } from 'pinia'

import { Types } from './types';

import { loadArticles, canselLoaded, addArticle, failedStatus } from '@/servise';

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articleRequestStatus: Types.request_status.REQUESTED,
    articles: [],
  }),
  getters: {
    getArticles: (state) => {
      return state.articles;
    },
    getRequestStatus: (state) => {
      return state.articleRequestStatus;
    }
  },
  actions: {
    // async fetchArticles() {
    //   try {
    //     const response = await fetch('./articles.json');
    //     const articles = await response.json();
    //     this.articles = articles["articles"];
    //     console.log('Fetch data');
    //   } catch (error) {
    //     console.error('Error fetching articles:', error);
    //   }
    // },

    async [Types.actions.ARTICLES_LOAD]() {
      this.articleRequestStatus = Types.request_status.REQUESTED
      
      try {
        const articles = await loadArticles();
        console.log(articles);
        //console.log(cancelToken.token)
        this.articleRequestStatus = Types.request_status.SUCCEEDED
        this.articles = articles;
      } catch (error) {
        if (this.articleRequestStatus != 'CANCELED'){
          failedStatus();
          this.articleRequestStatus = Types.request_status.FAILED
          console.log('Server error')
        } else {
          console.log('Load canceled')
        }
      }
        //return cancelToken;
      },

      [Types.actions.ARTICLES_LOAD_CANCEL]() {
        //const cancelToken = dispatch(Types.actions.ARTICLES_LOAD);
        //cancelToken.cancel();
        this.articleRequestStatus = Types.request_status.CANCELED
        canselLoaded();
      }, 

      // [Types.actions.CLEAR](){
      //   this.articles = null
      // },
    
    // async addNewArticle(newArticle) {
    //   let newId = this.articles.length ? this.articles[this.articles.length - 1].id + 1 : 0;
    //   this.articles.unshift({
    //     id: newId,
    //     ...newArticle
    //   });
    // }

    async addNewArticle(newArticle) {
      addArticle(newArticle);
      console.log(this.articles);
    }
  },
})
