import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import './assets/css/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'animate.css';

const app = createApp(App)
const pinia = createPinia();

app.use(pinia);
app.mount('#app');