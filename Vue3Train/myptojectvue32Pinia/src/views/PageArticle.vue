<template>
    <div class ="default ">
    <h3>{{ article.title}}</h3>
    <p>{{article.body}}</p>
    <p >Автор: {{ article.nameAuthor }}</p>
  </div>
</template>
    
<script>
//import { useArticlesStore } from '../store'

export default {
    name: 'PageArticle',
    props: {
        article: Object
    },
//     setup() {
        
//     // Получаем магазин статей
//     const articlesStore = useArticlesStore();

//     // Если статья не найдена, перенаправляем на главную страницу
//     if (!this.article) {
//       articlesStore.router.push('/');
//     }

//     // return {
//     //   this.article,
//     // };
//   },
}
</script>
        <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
    