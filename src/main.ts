import { createApp } from 'vue';
import App from './App.vue';
import VueTelegram from 'vue-tg';
import 'src/assets/styles/main.css';
import 'src/assets/styles/tg.css';

const app = createApp(App);
app.use(VueTelegram);

app.mount('#app');
