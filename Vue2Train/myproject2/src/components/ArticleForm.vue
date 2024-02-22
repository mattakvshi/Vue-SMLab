<template>
    <div>
      <h2>Add new article</h2>
      <form>
        <div>
          <input type="text" v-model="article.title" placeholde="Title" />
        </div>
        <div>
          <input type="text" v-model="article.nameAuthor" placeholder="Author" />
        </div>
        <div><textarea v-model="article.body" placeholder="Body"></textarea></div>
        <div>
          <label
            ><input type="checkbox" v-bind:checked="false" v-model="article.isPublished" />
            Published</label
          >
        </div>
        <div>
          <Input
            type="submit"
            value="Add"
            v-on:click.prevent="$emit('add-article', article)"
          />
        </div>
      </form>
    </div>
  </template>
  
  
  <script>

  export default {
    name: "ArticleForm",
    props: {
      title: String,
      body: String,
      nameAuthor: String,
      isPublished: Boolean,
    },
    data() {
      return {
        article: {
          title: this.title,
          body: this.body,
          nameAuthor: this.nameAuthor,
          isPublished: this.isPublished,
        },
      };
    },
  };
  </script>
  
  <style>
  </style>