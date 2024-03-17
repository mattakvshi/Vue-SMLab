<template>
  <v-col 
    cols="12"
      sm="10"
  >
    <h3 class="blue-grey--text text--darken-3 text-center mt-3">This is the best website in the world! Why?</h3>

    <v-carousel
    class="mt-5"
    rounded="lg"
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      rounded="lg"
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        rounded="lg"
        :color="colors[i]"
        height="100%"
      >
        <v-row
          rounded="lg"
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            {{ slide }} Because!
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <h3 class="blue-grey--text text--darken-3 text-center mt-5 mb-5">TOP OF THE BEST WEBSITES IN THE WORLD</h3>

  <v-simple-table class="indigo lighten-4 blue-grey--text text--darken-3 mb-5">
    <template v-slot:default>
      <thead class="indigo lighten-3">
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Domain
          </th>
          <th class="text-left">
            Top
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.top"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.domain }}</td>
          <td>{{ item.top }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

</v-col>
</template>
  
<script>
export default {
  name: 'AboutUs',
  data () {
      return {
        colors: [
          'indigo',
          'deep-purple',
          'indigo lighten-2',
          'purple',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        desserts: [
          {
            name: 'My website',
            domain: 'localhost:8080',
            top: 1,
          },
          {
            name: 'Google Search',
            domain: 'google.com ',
            top: 2,
          },
          {
            name: 'YouTube',
            domain: 'youtube.com ',
            top: 3,
          },
          {
            name: 'Facebook',
            domain: 'facebook.com',
            top: 4,
          },
          {
            name: 'Instagram',
            domain: 'instagram.com',
            top: 5,
          },
          {
            name: 'X',
            domain: 'twitter.com',
            top: 6,
          },
          {
            name: 'Baidu',
            domain: 'baidu.com',
            top: 7,
          },
          {
            name: 'Wikipedia',
            domain: 'wikipedia.org',
            top: 8,
          },
          {
            name: 'Yandex Search',
            domain: 'yandex.ru',
            top: 9,
          },
          {
            name: 'WhatsApp',
            domain: 'whatsapp.com',
            top: 10,
          },
        ],
      }
    },
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>
  