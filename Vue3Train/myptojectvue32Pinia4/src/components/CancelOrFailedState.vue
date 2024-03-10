<template>
      <div>
        <div v-if="articleRequestStatus === 'FAILED'">
          <p>Loading error!! Click on reload button.</p>
          <button @click="reArticles()">Reload</button>
        </div>
        <div v-else-if="articleRequestStatus === 'CANCELED'">
          <p>Loading canceled!! Click on reload button.</p>
          <button @click="reArticles()">Reload</button>
        </div>
      </div>
  </template>
      
      <script>
      import { useRouter } from 'vue-router';
  
      import { useArticlesStore } from '../store'
      import { computed } from 'vue';
  
      export default {
        name: 'CancelOrFailedState',
        setup() {
          const articlesStore = useArticlesStore();
          const router = useRouter()
  
          const articleRequestStatus = computed(() => articlesStore.$state.articleRequestStatus)
  
          const reArticles = () => {
            router.push('/')
            articlesStore.ARTICLES_LOAD().then(() => {
              if (articlesStore.getArticles.length) {
                console.log('Articles loaded')
              } else {
                console.log('Articles not loaded')
              }
            })  
          } 
  
      return {
        reArticles, articleRequestStatus
      }
    },          
      }
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    button{
      background-color:darkgray;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      padding: 5px 10px;
    }
    button:hover {
      background-color:lavender;
    }
    button:active{
      bottom: 1vh;
    } 
  </style>
      