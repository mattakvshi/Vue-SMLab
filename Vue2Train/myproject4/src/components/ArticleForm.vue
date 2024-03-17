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
            color="deep-purple lighten-3"
            min-width="200"
            class="mr-4"
            elevation="2"
            value="Add"
            :disabled="$v.$invalid"
            
            @click.stop="dialog = true"
          >Add</v-btn>
        <v-btn min-width="200" elevation="2" @click="clear">clear</v-btn>
      </div>
      </form>

      <v-row justify="center">
    <!-- <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Open Dialog
    </v-btn> -->

    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want to add a new article?
        </v-card-title>

        <v-card-text>
          After confirmation, you will be redirected to the home page, which will display all existing articles, including the one you are adding now. When you refresh the page, your added article will disappear, since we have not yet implemented sending to the backend in this version.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="deep-purple"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="deep-purple"
            text
            type="submit"
            v-on:click.prevent="$emit('add-article', article)"
            
            @click="submit"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
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
        dialog: false,
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