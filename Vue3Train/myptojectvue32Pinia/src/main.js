import { createApp} from 'vue';
import App from './App.vue';
import router from './router';
import PublicatedButton from './components/PublicatedButton.vue';
import { createPinia } from 'pinia'

const app = createApp(App)

// Инициировать Pinia
const pinia = createPinia()
app.use(pinia)


app.component('PublicatedButton', PublicatedButton);

app.use(router);

app.mount('#app');