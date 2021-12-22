import { createApp } from 'vue';
import BootstrapVue from 'bootstrap-vue-3';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import App from './App.vue';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.use(BootstrapVue);
app.use(BootstrapIconsPlugin);
// app.use(router)
app.mount('#app');