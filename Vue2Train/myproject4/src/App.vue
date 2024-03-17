<template>
  <v-app id="app">

    <!-- Навигация -->
    <v-app-bar
      app
      color="deep-purple lighten-5"
      flat
    >
      <v-tabs
        centered
        class="ml-n9"
        color="indigo lighten-1"
      >
        <v-tab
          v-for="link in links"
          :key="link[0]"
          v-on:click="pushLikns(link[0])"
        >
        {{ link[1] }}
        <!-- <router-link class="nav" :to="link[0]">{{ link[1] }}</router-link> -->
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="deep-purple darken-3 shrink"
        size="40"
      >
        <span class="white--text text-h6">CM</span>
      </v-avatar>
    </v-app-bar>

    <!-- Основная секция -->
    <v-main class="indigo lighten-4  d-flex justify-center">
      <v-container class="mx-auto">
        <v-row class="d-flex justify-center">

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              class="d-flex justify-center"
              min-height="70vh"
              rounded="lg"
              color="deep-purple lighten-5"
            >
            <router-view />
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Подвал -->
    <v-footer
    padless
    class="indigo lighten-1"
  >
    <v-card
      flat
      tile
      class="deep-purple lighten-5 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon[1]"
          class="mx-4 white--text"
          icon
          v-on:click="pushFoterLinks(icon[1])"
        >
          <v-img :src=" icon[0] " size="24px"/>
        </v-btn>
      </v-card-text>

      <v-card-text class="indigo--text text--lighten-2 pt-0" >
        Это тренировочное веб приложение со стеком (vue 2.7 + vuex + vuetify) реализованное по курсу от SMLab написанное Сидоренко Максимом Витальевичем студентом 34-той группы, 3-го курса, напрвления Математическое обеспечение и администрирование информационных систем, факультета Прикладной метематики и компьютерных технологий, Кубанского Госудерственного Университета... и дай бог здоровья и сил каждому, кто прочитал до конца, аминь.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="indigo--text text--lighten-1">
        {{ new Date().getFullYear() }} — <strong>development by mattakvshi</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
import router from './router';

  export default {
    data: () => ({
      links: [
         [ '/', 'Home'] ,
         [ '/about', 'About'] ,
         [ '/new',  'Add new article'] ,
      ],
      icons: [
        ['/icons8-github.svg', 'https://github.com/mattakvshi'],
        ['/icons8-линкедин.svg', 'https://www.linkedin.com/in/mattakvshi'],
      ],
    }),
    methods: {
      pushLikns(link){	
        console.log(window.location.pathname)
        if(window.location.pathname !== link) {
          router.push(link)
        }
      },
      pushFoterLinks(link){
        window.open(link, '_blank')
      }
    },
  }
</script>


<!-- <template>
  <div id="app">
    <div id="nav">
        <router-link class="nav" to="/">Home</router-link>
        <router-link class="nav" to="/about">About</router-link>
        <router-link class="nav" to="/new">Add new artivle</router-link>
    </div>
    <router-view class="container"/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script> -->

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #2c3e50;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  /* отображаем курсор в виде руки при наведении; некоторые
  считают, что необходимо оставлять стрелочный вид для кнопок */
  cursor: pointer;
}

.nav{
  padding: 10px 15px;
  margin: 0 20px;
  font-style: none;
  text-decoration: none;
  font-size: 20px;
  color:darkslategray;

  border: solid 1px darkslategray;
  border-radius: 10px;
}
.nav:hover {
  opacity: 0.6;
}

#nav{
  margin: 40px 0;
}

</style> -->
