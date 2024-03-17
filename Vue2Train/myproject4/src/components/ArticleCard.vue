<template>
  <v-card
  class ="ma-3" :style="cardColorDefault" v-bind:class="{'indigo lighten-4': !published}" 
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="getSrcImg"
    >
      <v-card-title>{{title}}</v-card-title>
    </v-img>

    <v-card-text class="text--primary pb-0">
      <div :style="nameAuthorItalic" >Author: {{ nameAuthor }}</div>
    </v-card-text>

    <v-card-subtitle class="pb-2 pt-0" v-bind:class="{'deep-purple--text text--lighten-5': published}">
      {{ notPublishedText }}
    </v-card-subtitle>
    
    <v-card-actions>
      <v-btn
        color="deep-purple"
        text
        v-on:click="pushToUrl(articleUrl)"
      >
        Explore
      </v-btn>

      <PublicatedButton @button-published="chenchPublished" :value="buttonPublicatedValue" />
    </v-card-actions>
  </v-card>
  <!-- <div class ="default " v-bind:class="{unpublished: !published}">
    <h3>{{title}}</h3>
    <p>{{body}}</p>
    <p class = "dont" >{{ notPublishedText }}</p>
    <p :style="nameAuthorItalic">Автор: {{ nameAuthor }}</p>
    <router-link :to="articleUrl" >Ссылка</router-link>
    
    <PublicatedButton @button-published="chenchPublished" :value="buttonPublicatedValue" />
  
  </div> -->
</template>

<script>
import router from '@/router';

export default {
  name: 'ArticleCard',
  data() {
    return {
      published: this.isPublished,
    };
  },
  props: {
    id: Number,
    title: String,
    body: String,
    nameAuthor: String,
    isPublished: Boolean
  },
  computed: {
    nameAuthorItalic(){
      return this.published ? 'font-style: normal;' : 'font-style: italic;';
    },

    cardColorDefault(){
      return this.published ? 'background-color: #EDE7F6;' : '';
    },

    buttonPublicatedValue(){
      return this.published ? 'unpublicate' : 'publicated';
    },

    notPublishedText(){
      return this.published ? 'publushed' : 'not published';
    },
    articleUrl(){
        return "/article/" + this.$props.id
    },
    getSrcImg(){
      if(this.$props.id <= 8) {
        return "/img/" + this.$props.id + ".jpg"
      } else {
        return "/img/default.jpeg"
      }
    }
  },
  methods:{
    chenchPublished(){
      this.published = !this.published 
    },
    pushToUrl(url){
      router.push(url)
    }
  },
  watch: {
    published(newVal, oldVal){
      console.log(`${newVal} ${oldVal}`)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* button{
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
 } */
 /* .default{
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
 } */
</style>
