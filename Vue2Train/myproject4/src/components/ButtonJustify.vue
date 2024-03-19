<template>
    <v-btn v-bind="$attrs" :justify="justify" @click="$emit('click')">
      <slot></slot>
    </v-btn>
  </template>
  
  <script>
  import { VBtn } from 'vuetify';
  
  export default {
    name: 'ButtonJustify',
    extends: VBtn,
    props: {
      justify: {
        type: String,
        default: 'center',
      },
    },
  };
  </script>