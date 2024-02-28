//В этой версии проекта мы реализовали хранилище на Pinia

import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [],
  }),
  getters: {
    getArticles: (state) => {
      return state.articles;
    }
  },
  actions: {
    async fetchArticles() {
      try {
        const response = await fetch('./articles.json');
        const articles = await response.json();
        this.articles = articles["articles"];
        console.log('Fetch data');
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    },
    
    async addNewArticle(newArticle) {
      let newId = this.articles.length ? this.articles[this.articles.length - 1].id + 1 : 0;
      this.articles.unshift({
        id: newId,
        ...newArticle
      });
    }
  },
})
