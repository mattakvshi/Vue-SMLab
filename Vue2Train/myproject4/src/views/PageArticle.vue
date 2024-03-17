<template>
    <div class ="default ">
    <h3>{{title}}</h3>
    <p>{{body}}</p>
    <p >Автор: {{ nameAuthor }}</p>
  </div>
</template>
    
<script>


export default {
    name: 'PageArticle',
    props: {
        title: String,
        body: String,
        nameAuthor: String,
    }
}
</script>
        <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
    