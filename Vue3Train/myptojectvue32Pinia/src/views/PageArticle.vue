<template>
    <div class ="default ">
    <h3>{{ article.title}}</h3>
    <p>{{article.body}}</p>
    <p >Автор: {{ article.nameAuthor }}</p>
  </div>
</template>
    
<script>


export default {
    name: 'PageArticle',
    props: {
        article: Object
    }
}
</script>
        <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
    