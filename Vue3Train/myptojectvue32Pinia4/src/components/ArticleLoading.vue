<template>
    <div>
        <div v-if="articleRequestStatus === 'REQUESTED'">
            <img src="../assets/2.svg"/>
            <p>Loading...</p>
            <button @click="cancel()">Cansel</button>
        </div>
        <!-- <div v-else-if="articleRequestStatus === 'FAILED'">
            <p>Loading error!! Click on reload button.</p>
            <button @click="reArticles()">Reload</button>
        </div>
        <div v-else-if="articleRequestStatus === 'CANCELED'">
            <p>Loading canceled!! Click on reload button.</p>
            <button @click="reArticles()">Reload</button>
        </div> -->
        <div v-else>
            <p>Непредвиденная ошибка на стороне сервера.</p>
        </div>
    </div>
</template>

<script>
import { useArticlesStore } from '../store'
import { computed } from 'vue';
import { useRouter } from 'vue-router';
 
export default{
    name: 'ArticleLoading',
    setup() {
        
        const articlesStore = useArticlesStore();
        const router = useRouter()

        const articleRequestStatus = computed(() => articlesStore.$state.articleRequestStatus)

        // const reArticles = () => {
        //   articlesStore.ARTICLES_LOAD().then(() => {
        //     if (articlesStore.getArticles.length) {
        //       console.log('Articles loaded')
        //     } else {
        //       console.log('Articles not loaded')
        //     }
        //   })  
        // } 

        const cancel = () => {
          articlesStore.ARTICLES_LOAD_CANCEL()
          router.push('/cancelorfailed')
        } 

        return {
            articleRequestStatus, 
            //reArticles, 
            cancel
        }
    },
}
</script>

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
</style>