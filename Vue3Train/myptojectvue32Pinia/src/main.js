import { createApp} from 'vue';
import App from './App.vue';
import router from './router';
import PublicatedButton from './components/PublicatedButton.vue';
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())

app.component('PublicatedButton', PublicatedButton);

app.use(router);

app.mount('#app');