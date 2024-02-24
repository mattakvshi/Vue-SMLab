<template>
  <ArticleForm title="New post" body="" nameAuthor="" isPublished="" @add-article="addArticle" />
</template>

<script>
import ArticleForm from '../components/ArticleForm.vue';
import {useStore} from 'vuex'
import { useRouter } from 'vue-router';

export default {
  name: 'NewArticle',
  components: {
    ArticleForm,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const addArticle = (article) => {
      store.dispatch('addNewArticle', article);
      router.push('/');
    };

    return {
      addArticle,
    };
  },
};
</script>

<style scoped>
</style>