<template >
  <div class = "hello">
    <h1>{{msg}}</h1>
    <ul v-if="this.$root.$data.articles.length">
      <ArticleCard
        v-for="article in this.$root.$data.articles"
        :key="article.id"
        :id="article.id"
        :title="article.title"
        :body="article.body"
        :nameAuthor = "article.nameAuthor"
        :isPublished="article.isPublished"
        />
    </ul>
    <p v-else>
      No articles in the list.
    </p>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue'

export default {
  name: 'ArticleList',
  props: {
    msg: String
  },
  components: {
    ArticleCard,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3{
    margin: 40px 0 0;
  }
  ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 150px;
    row-gap: 60px;
    padding: 20px 20px;
    flex-wrap: wrap;
  }
  li {
    margin: 0 20px;
    padding: 20px 20px;
    display: block;
  }
  a {
    color: #42b983;
  }
  .hello{
    width: 1080px;
    margin: 0 20px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
