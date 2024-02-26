<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/new">Add new article</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import  {onBeforeMount } from "vue"
import { useArticlesStore } from './store'

export default {
  name: 'App',
  setup(){
    const articlesStore = useArticlesStore()

    onBeforeMount(() => {
      articlesStore.fetchArticles().then(() => {
        if(articlesStore.getArticles.length)
          console.log('Articles loaded')
        else
        console.log('Articles not loaded')
      });
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
</style>