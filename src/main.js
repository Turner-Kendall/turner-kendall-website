import { createApp } from 'vue'
import "vue-picocss/css/pico.min.css"
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'
import './style.css'
import App from './App.vue'
import router from "./router";
import VueSplide from '@splidejs/vue-splide';

const app = createApp(App)
app.use(router)
app.use( VueSplide )
app.mount('#app')