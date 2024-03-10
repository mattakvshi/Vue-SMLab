<template>   
  <ArticleList msg="My content list:"/>
</template>
      
<script>
  import ArticleList from './ArticleList.vue'
  import { useArticlesStore } from '../store'
  
  export default {
    name: 'ArticleWrapper',
    components:{
      ArticleList,
    },

    async setup(){
      const articlesStore = useArticlesStore()
       
      const load = await articlesStore.ARTICLES_LOAD() 
  
      return {load}
    }
  }
</script>
      
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
       
</style>
      