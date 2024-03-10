<template>
  <ArticleForm title="New post" body="" nameAuthor="" isPublished="" @add-article="addArticle" />
</template>

<script>
import ArticleForm from '../components/ArticleForm.vue';
import { useArticlesStore } from '../store'
import { useRouter } from 'vue-router';

export default {
  name: 'NewArticle',
  components: {
    ArticleForm,
  },
  setup() {
    const router = useRouter();
    const articlesStore = useArticlesStore()

    const addArticle = (article) => {
      articlesStore.addNewArticle(article);
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