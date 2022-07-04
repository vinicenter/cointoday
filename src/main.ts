import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@popperjs/core';
import 'bootstrap';
import 'phosphor-icons';

createApp(App)
  .use(router)
  .mount('#app');
