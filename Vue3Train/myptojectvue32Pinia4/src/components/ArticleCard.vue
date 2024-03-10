<template>
  <div :class="{ 'default': true, 'unpublished': !published }">
    <h3>{{ title }}</h3>
    <p>{{ body }}</p>
    <p class="dont">{{ notPublishedText }}</p>
    <p :style="nameAuthorItalic">Автор: {{ nameAuthor }}</p>
    <router-link :to="articleUrl">Ссылка</router-link>

    <PublicatedButton @button-published="changePublished" :value="buttonPublicatedValue" />
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';

import PublicatedButton from './PublicatedButton.vue';

export default {
  name: 'ArticleCard',
  components: {
    PublicatedButton
  },
  props: {
    id: Number,
    title: String,
    body: String,
    nameAuthor: String,
    isPublished: Boolean
  },
  setup(props) {
    console.log(props)
    const published = ref(props.isPublished);

    const nameAuthorItalic = computed(() => published.value ? 'font-style: normal;' : 'font-style: italic;');
    const buttonPublicatedValue = computed(() => published.value ? 'unpublicate' : 'publicated');
    const notPublishedText = computed(() => published.value ? '' : 'not published');
    const articleUrl = computed(() => `/article/${props.id}`);

    const changePublished = () => {
      published.value = !published.value;
    };

    watch(published, (newVal, oldVal) => {
      console.log(`${newVal} ${oldVal}`);
    });

    return {
      published,
      nameAuthorItalic,
      buttonPublicatedValue,
      notPublishedText,
      articleUrl,
      changePublished
    };
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 button{
  position: absolute;
  bottom: 3%;
  right: 3%;
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
 .default{
  width: 300px;
  min-height: 250px;
  border: solid 3px bisque;
  background-color: bisque;
  padding: 20px 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  position: relative;
 }
 .unpublished{
  border: solid 3px pink;
  background-color: gainsboro;
 }
 .dont{
  position: absolute;
  left: 35%;
  bottom: 2%;

  font-size: 16px;
  opacity: 0.5;
 }
</style>
