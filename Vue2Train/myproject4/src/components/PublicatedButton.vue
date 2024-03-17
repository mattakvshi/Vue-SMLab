<template>
  <!-- <div>
    <button v-if="isPublished === 0" @click="chenchPublished()">publicated</button>
    <button v-else @click="chenchPublished()">unpublicate</button>
  </div> -->
  <v-btn elevation="1" class="deep-purple lighten-4" v-on:click.prevent="buttonPublished">{{value}}</v-btn>
</template>
  
  
  <script>
  export default {
    name: "PublicatedButton",
    props: {
      value: String,
    },
    methods: {
    buttonPublished(){
      this.$emit("button-published");
    },
  },
}
  </script>
  
  <style>
  </style>