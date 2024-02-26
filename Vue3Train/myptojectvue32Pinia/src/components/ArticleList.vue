<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul v-if="articles && articles.length">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :id="article.id"
        :title="article.title"
        :body="article.body"
        :nameAuthor="article.nameAuthor"
        :isPublished="article.isPublished"
      />
    </ul>
    <div v-else>
      <p>No articles in the list.</p>
      <button @click="reArticles">Reload</button>
    </div>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue';
import { computed } from 'vue';
import { useArticlesStore } from '../store'

export default {
  name: 'ArticleList',
  props: {
    msg: String
  },
  components: {
    ArticleCard,
  },
  setup() {
    const articlesStore = useArticlesStore()

    const articles = computed(() => articlesStore.getArticles)

    const reArticles = () => {
      articlesStore.fetchArticles().then(() => {
        if (articlesStore.getArticles.length) {
          console.log('Articles loaded')
        } else {
          console.log('Articles not loaded')
        }
      })
    }

    return {
      articles,
      reArticles
    };
  },
};
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