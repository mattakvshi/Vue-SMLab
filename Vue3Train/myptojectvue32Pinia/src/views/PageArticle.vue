<template>
    <div class ="default ">
    <h3>{{ article.title}}</h3>
    <p>{{article.body}}</p>
    <p >Автор: {{ article.nameAuthor }}</p>
  </div>
</template>
    
<script>
//import { useArticlesStore } from '../store'
import {useRouter} from 'vue-router'
 
export default {
    name: 'PageArticle',
    props: {
        article: Object
    },
    setup(props) {
        
    // Получаем магазин статей
    //const articlesStore = useArticlesStore();
    const router = useRouter()

    // Если статья не найдена, перенаправляем на главную страницу
    if (!props.article) {
      router.push('/');
    }

    // return {
    //   this.article,
    // };
  },
}
</script>
        <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
    