<template>
  <ArticleForm title="New post" body="" nameAuthor="" isPublished="" @add-article="addArticle" />
</template>

<script>
import ArticleForm from '../components/ArticleForm.vue';
import store from '../store';
import { useRouter } from 'vue-router';

export default {
  name: 'NewArticle',
  components: {
    ArticleForm,
  },
  setup() {
    const router = useRouter();

    const addArticle = (article) => {
      store.setArticle(article);
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