  <template>
    <div class="hello">
      <h1>{{ msg }}</h1>

      <div v-if="articlesRequestStatus === 'REQUESTED'">
        <img src="../assets/Bean Eater-1s-200px.svg"/>
        <p>Loading...</p>
        <button v-on:click="cancelLoadArticles">Cancel</button>
      </div>

      <ul v-else-if="articlesRequestStatus === 'SUCCEEDED'">
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

      <div v-else-if="articlesRequestStatus === 'FAILED' || articlesRequestStatus === 'CANCELED'">
        <p >
          Loading errors, click Reload button.
        </p>
        <button v-on:click="reArticles">Reload</button>
      </div>

      <div v-else-if="!articles.lenght">
        <p>No article in articles list.</p>
      </div>


    </div>
  </template>

  <script>
  import ArticleCard from './ArticleCard.vue'
  import { mapState } from 'vuex';
  //import { mapState, mapActions } from 'vuex';
  //import { Types } from '@/store/types';
  import store from '../store'

  export default {
    name: 'ArticleList',
    props: {
      msg: String
    },
    components: {
      ArticleCard,
    },
    computed: {
      // articles() {
      //   try {
      //     return this.$store.state.storage.articles;
      //   } catch (error) {
      //     return [];
      //   }
      // },
      // articlesRequestStatus(){
      //   console.log(this.$store.state.load.articlesRequestStatus)
      //   return this.$store.state.load.articlesRequestStatus
      // }
      //...mapState('storage', ['articles', 'articlesRequestStatus'])
      ...mapState({
        articles: state => state.storage.articles,
        articlesRequestStatus: state => state.load.articlesRequestStatus
      }),
      //...mapState('store', ['articlesRequestStatus'])
    },
    methods: {
      reArticles(){
        try {
          store.dispatch('ARTICLES_LOAD')
          if(!this.article.lenght){
            throw 'error'
          }
          return this.articles
        } catch (error) {
          console.log('Reload error')
        }
      },

      cancelLoadArticles(){
        store.dispatch('ARTICLES_LOAD_CANCEL')
      }
      //...mapActions('load', ['ARTICLES_LOAD', 'ARTICLES_LOAD_CANCEL']),

      // reArticles(){
      //   this.loadArticles();
      // }
    }
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
