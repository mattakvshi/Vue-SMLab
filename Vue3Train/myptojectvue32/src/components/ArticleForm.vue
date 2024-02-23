<template>
  <div>
    <h2>Add new article</h2>
    <form>
      <div>
        <input type="text" v-model="article.title" placeholder="Title" />
      </div>
      <div>
        <input type="text" v-model="article.nameAuthor" placeholder="Author" />
      </div>
      <div><textarea v-model="article.body" placeholder="Body"></textarea></div>
      <div>
        <label>
          <input type="checkbox" v-model="article.isPublished" />
          Published
        </label>
      </div>
      <div>
        <input type="submit" value="Add" @click.prevent="$emit('add-article', article)" />
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
name: "ArticleForm",
props: {
  title: String,
  body: String,
  nameAuthor: String,
  isPublished: Boolean,
},
setup(props) {
  const article = ref({
    title: props.title,
    body: props.body,
    nameAuthor: props.nameAuthor,
    isPublished: props.isPublished,
  });

  return {
    article,
  };
},
};
</script>

<style>
</style>