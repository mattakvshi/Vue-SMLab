<template>
  <Suspense >
    <template #default >
      <ArticleWrapper />
    </template>
    <template #fallback>
      <!-- <div>
        <div v-if="articleRequestStatus === 'REQUESTED'">
          <img src="../assets/1.svg"/>
          <p>Loading...</p>
          <button @click="cancel()">Cansel</button>
        </div>
        <div v-else-if="articleRequestStatus === 'FAILED'">
          <p>Loading error!! Click on reload button.</p>
          <button @click="reArticles()">Reload</button>
        </div>
        <div v-else-if="articleRequestStatus === 'CANCELED'">
          <p>Loading canceled!! Click on reload button.</p>
          <button @click="reArticles()">Reload</button>
        </div>
        <div v-else>
          <p>Непредвиденная ошибка на стороне сервера.</p>
        </div>
      </div> -->
      <ArticleLoading />
      <!-- <div>
          <p>Loading...</p>
          <button @click="cansel()">Cansel</button>
        </div>  -->
    </template>
  </Suspense>
    <!-- <div v-if="articleRequestStatus === 'FAILED'">
      <p>Loading error!! Click on reload button.</p>
      <button @click="reArticles()">Reload</button>
    </div>
    <div v-else-if="articleRequestStatus === 'CANCELED'">
      <p>Loading canceled!! Click on reload button.</p>
      <button @click="reArticles()">Reload</button>
    </div> -->
</template>
    
    <script>
    import { useRouter } from 'vue-router';
    import ArticleWrapper from '../components/ArticleWrapper.vue'
    import ArticleLoading from '../components/ArticleLoading.vue'

    import { useArticlesStore } from '../store'
    import { computed } from 'vue';

    //import { ref } from 'vue'

    export default {
      name: 'HomePage',
      components:{
        ArticleWrapper, 
        ArticleLoading,
      },
      setup() {
        //const suspense = ref(null)
        //console.log(suspense)
        const articlesStore = useArticlesStore();
        const router = useRouter()

        const articleRequestStatus = computed(() => articlesStore.$state.articleRequestStatus)

        const reArticles = () => {
          //suspense.value.unmount()
          //articlesStore.CLEAR()
          
          articlesStore.ARTICLES_LOAD().then(() => {
            if (articlesStore.getArticles.length) {
              console.log('Articles loaded')
            } else {
              console.log('Articles not loaded')
            }
            router.push('/')
          })  
        } 

        // const reloadSuspense = () => {
        //  //suspense.value.reload()
        //   suspense.value.unmount()
        //   suspense.value.mount()
        // }

    return {
       articleRequestStatus, reArticles
    }
  },
    //   setup() {
        
    //     const articlesStore = useArticlesStore();

    //     const articleRequestStatus = computed(() => articlesStore.getRequestStatus)
        

    //     const reArticles = () => {
    //       articlesStore.ARTICLES_LOAD().then(() => {
    //         if (articlesStore.getArticles.length) {
    //           console.log('Articles loaded')
    //         } else {
    //           console.log('Articles not loaded')
    //         }
    //       })  
    //     } 

    //     const cancel = () => {
    //       articlesStore.ARTICLES_LOAD_CANCEL()
    //     } 

    //     return articleRequestStatus, reArticles, cancel
    // },
      // setup(){
      //   const articlesStore = useArticlesStore()

      
      //   const cansel = () => {
      //     articlesStore.ARTICLES_LOAD_CANCEL()
      //   } 

      //   return {
      //     cansel
      //   }
      // },
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
</style>
    