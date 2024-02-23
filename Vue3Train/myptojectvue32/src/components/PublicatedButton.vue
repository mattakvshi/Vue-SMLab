<template>
  <button @click="buttonPublished">{{ value }}</button>
</template>

<script>

export default {
  name: "PublicatedButton",
  props: {
    value: String,
  },
  setup(props, { emit }) {
    const buttonPublished = () => {
      emit('button-published');
    };

    return {
      buttonPublished
    };
  },
};
</script>

<style>
</style>