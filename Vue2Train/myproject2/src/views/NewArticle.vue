<template>
    <ArticleForm title="New post" body="" nemeAuthor="" isPublished=""
     v-on:add-article="addArticle" />
    </template>
    
    <script>
    import ArticleForm from '../components/ArticleForm.vue'
    import store from '../store'

    export default {
      name: 'NewArticle',
      components:{
        ArticleForm,
      },
      methods: {
        addArticle: function(article) {
            store.setArticle(article)
            this.$router.push('/')
        },
    },
      
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
     
    </style>
    