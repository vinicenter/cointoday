import { createApp } from 'vue';
import notifications from '@kyvg/vue3-notification';
import App from './App.vue';
import router from './router';

import '@popperjs/core';
import 'bootstrap';
import 'phosphor-icons';

const app = createApp(App);

app.use(router);
app.use(notifications);
app.mount('#app');
