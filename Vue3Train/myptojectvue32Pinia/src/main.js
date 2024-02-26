import { createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PublicatedButton from './components/PublicatedButton.vue';

const app = createApp(App).use(store);

app.component('PublicatedButton', PublicatedButton);

app.use(router);

// Передача состояния хранилища в корневой компонент через provide
app.provide('store', store);

app.mount('#app');
