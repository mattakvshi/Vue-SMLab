<template>
  <v-app id="app">

    <!-- Навигация -->
    <v-app-bar
      :style="appBarStyle"
      app
      color="deep-purple lighten-5"
      flat
    >
      <v-tabs
        :style="tabsStyle"
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


      <v-menu
        bottom
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :style="appBarButton"
            class="mr-6"
            max-width="5"
            min-width="5"
            v-bind="attrs"
            v-on="on"
            rounded
          >
            <v-icon color="deep-purple darken-4" :style="menuStyle" >mdi-menu</v-icon>

            <v-avatar
              class="hidden-sm-and-down mr-"
             color="deep-purple darken-3 shrink"
              size="40"
            >
              <span class="white--text text-h6">CM</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-list class="blue-grey lighten-5">
          <v-list-item
            v-for="(item, i) in dropDownItems"
            :key="i"
            @click.stop="() => {
              if(item.link === 'settings') changeDialog();
            }"
            v-on:click="pushLikns(item.link)"
          >
            <v-icon class="mr-2" color="deep-purple lighten-2">{{item.icon}}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>



      <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template> -->
      <v-card class="indigo lighten-4">
        <v-toolbar
          dark
          class="deep-purple darken-3"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          class="indigo lighten-4"
          three-line
          subheader
        >
          <v-subheader>User Controls</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
        class="indigo lighten-4"
          three-line
          subheader
        >
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>

    </v-app-bar>

    <!-- Основная секция -->
    <v-main class="indigo lighten-4  d-flex justify-center">
      <v-container class="mx-auto">
        <v-row style="position: relative;" class="d-flex justify-center">

          <!-- <v-col
            style="position: absolute; left: 0px; top: 0px;"
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
            <v-list rounded="lg">
              <h3 class="text-center">Manual block</h3>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>You are on the {{ pageName(window.location.pathname) }} page</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Actions</v-list-item-title>
                  <v-list-item-subtitle>{{ pageActions(window.location.pathname) }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title>Information</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ pageInformation(window.location.pathname)}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            </v-sheet>
          </v-col> -->

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

      dropDownItems: [
          {
            title: 'Profile',
            link: '',
            icon: 'mdi-account',
            click: () => {
              this.pushLikns(this.link);
            }
          },
          {
            title: 'Settings',
            link: 'settings',
            icon: 'mdi-brightness-5',
            click: () => {
              this.changeDialog();
            } 
  
          },
          {
            title: 'Home',
            link: '/',
            icon: 'mdi-home',
            click: () => {
              this.pushLikns(this.link);
            }
            
          },
          {
            title: 'About us',
            link: '/about',
            icon: 'mdi-widgets',
            click: () => {
              this.pushLikns(this.link);
            }
            
          },
          {
            title: 'Add new article',
            link: '/new',
            icon: 'mdi-pencil',
            click: () => {
              this.pushLikns(this.link);
            }
          },
        ],

        manualData: [
          {
            link: '/',
            name: 'home',
            action: '',
            information: '',
          },
          {
            link: '/about',
            name: 'about us',
            action: '',
            information: '',
          },
          {
            link: '/new',
            name: 'add new article',
            action: '',
            information: '',
          },
        ],

        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,

        screenWidth: window.innerWidth,
    }),

    computed: {

      menuStyle() {
        //console.log(window.screen.width)
        return this.screenWidth < 960 ? 'display: flex; justify: right;' : 'display: none;';
      }, 

      tabsStyle() {
        //console.log(window.screen.width)
        return this.screenWidth < 960 ? 'display: none;' : 'display: block;';
      },

      appBarStyle(){
        return this.screenWidth < 960 ? 'position: relative;' : '';
      },
      appBarButton(){
        return this.screenWidth < 960 ? 'position: absolute; right: 8px; top: 8px;' : '';
      }


      // pageName(link){
      //   let item = this.manualData.find(item => item.link === link);
      //   return item.name
      // },
      // pageActions(){
      //   this.manualData.forEach((item) => { if (item.link === window.location.pathname) return item.action})
      //   return false
      // },
      // pageInformation(){
      //   this.manualData.forEach((item) => { if (item.link === window.location.pathname) return item.information})
      //   return false
      // },
    },

    mounted() {
      window.addEventListener('resize', this.getWindowWidth);
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.getWindowWidth);
    },

    methods: {

      pushLikns(link){	
        console.log(window.location.pathname)
        if(window.location.pathname !== link && link !== 'settings' && link !== '') {
          router.push(link)
        }
      },

      changeDialog() {
        this.dialog = true;
      },

      pushFoterLinks(link){
        window.open(link, '_blank')
      },

      getWindowWidth() {
        this.screenWidth = window.innerWidth;
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
