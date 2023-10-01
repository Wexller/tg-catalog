import { createApp } from 'vue';
import App from './App.vue';
import VueTelegram from 'vue-tg';
import './assets/styles/main.css';
import './assets/styles/tg.css';

const app = createApp(App);
app.use(VueTelegram);

app.mount('#app');
