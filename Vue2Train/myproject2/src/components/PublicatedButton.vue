<template>
  <!-- <div>
    <button v-if="isPublished === 0" @click="chenchPublished()">publicated</button>
    <button v-else @click="chenchPublished()">unpublicate</button>
  </div> -->
  <Button v-on:click.prevent="buttonPublished">{{value}}</Button>
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