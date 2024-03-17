<template>
    <div 
    class="d-flex justify-center flex-column pa-4 mt-4"
    style="min-width: 50%;"
    >
      <h2 class="mt-4 text-center">Add new article</h2>
      <form class="w-100 d-flex flex-column justify-center">
          <v-text-field 
            class="w-auto" 
            type="text" 
            required 
            v-model="article.title"
            :counter="40"
            :error-messages="titleErrors"
            label="Title" 
            @input="$v.article.title.$touch()"
            @blur="$v.article.title.$touch()"
          ></v-text-field>
          <v-text-field 
            class="w-auto"
            type="text"
            required
            v-model="article.nameAuthor" 
            :counter="20"
            :error-messages="authorNameErrors"
            label="Author"
            @input="$v.article.nameAuthor.$touch()"
            @blur="$v.article.nameAuthor.$touch()"
          ></v-text-field>
          <v-textarea 
            class="w-auto"
            v-model="article.body"
            variant="solo-filled"
            required 
            label="Body"
            :counter="500"
            :error-messages="bodyErrors"
            @input="$v.article.body.$touch()"
            @blur="$v.article.body.$touch()"
          ></v-textarea>

          <v-checkbox 
            label=" Published" 
            color="indigo"
            v-model="article.isPublished"
            imput-valut="false"
            value
          ></v-checkbox>
          <div class="d-flex flex-row justify-center">
          <v-btn
            class="mr-4"
            elevation="2"
            type="submit"
            value="Add"
            :disabled="$v.$invalid"
            v-on:click.prevent="$emit('add-article', article)"
            @click="submit"
          >Add</v-btn>
        <v-btn elevation="2" @click="clear">clear</v-btn>
      </div>
      </form>
    </div>
  </template>

  
  <script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'

  export default {
    name: "ArticleForm",
    props: {
      title: String,
      body: String,
      nameAuthor: String,
      isPublished: Boolean,
    },

    mixins: [validationMixin],

    validations: {
      article: {
      title: { required, maxLength: maxLength(40) },
      nameAuthor: { required,  maxLength: maxLength(20)},
      body: { required, maxLength: maxLength(500)},
    }
    },

    data() {
      return {
        article: {
          title: this.title,
          body: this.body,
          nameAuthor: this.nameAuthor,
          isPublished: false,
        },
      };
    },
    computed: {
      titleErrors () {
        const errors = []
        if (!this.$v.article.title.$dirty) return errors
        !this.$v.article.title.maxLength && errors.push('Title must be at most 40 characters long')
        !this.$v.article.title.required && errors.push('Title is required')
        return errors
      },
      bodyErrors () {
        const errors = []
        if (!this.$v.article.body.$dirty) return errors
        !this.$v.article.body.maxLength && errors.push('Body must be at most 500 characters long')
        !this.$v.article.body.required && errors.push('Body is required.')
        return errors
      },
      authorNameErrors () {
        const errors = []
        if (!this.$v.article.nameAuthor.$dirty) return errors
        !this.$v.article.nameAuthor.maxLength && errors.push('Author must be at most 20 characters long')
        !this.$v.article.nameAuthor.required && errors.push('Author is required')
        return errors
      },
    },
    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.article.title = ''
        this.article.body = ''
        this.article.nameAuthor = ''
        this.article.isPublished = false
      },
    },
  };
  </script>
  
  <style>
  </style>