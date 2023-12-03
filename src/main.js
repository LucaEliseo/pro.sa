import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'; 
import Home from './components/Home/home.vue';



// Crea l'istanza di Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component : Home },

   {path: '/home',
  component:() => import('./components/Home/home.vue')
  },
  {
    path: '/configurazione',
    component:() => import('./components/Config/configurazione.vue')
  }
  ],
});

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdiSvg', 
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');
