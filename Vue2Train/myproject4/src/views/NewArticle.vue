<template>
    <ArticleForm title="" body="" nemeAuthor="" isPublished
     v-on:add-article="addArticle" />
</template>
    
    <script>
    import { mapState } from 'vuex';
    import ArticleForm from '../components/ArticleForm.vue'
    import store from '../store'
    
    export default {
      name: 'NewArticle',
      components: {
        ArticleForm,
      },
      computed: mapState({
        articleAddStatus: state => state.storage.articleAddStatus
      }),
      methods: {
        addArticle: function(article) {
          store.dispatch('ADD_NEW_ARTICLE', article);
          setTimeout(3000);
          this.$router.push('/');
        },
      },
    }
    
    </script>
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
     
    </style>
    