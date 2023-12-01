import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'; // Importa le icone di Material Design Icons (MDI)

// Importa i tuoi componenti Vue
import Home from './components/Home/home.vue';


// Crea l'istanza di Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: Home },

   {path: '/home',
  component:() => import('./components/Home/home.vue')
  }
  ],
});

// Crea l'istanza di Vuetify
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdiSvg', // Utilizza le icone di Material Design Icons in formato SVG
  },
});

// Crea l'istanza di Vue
const app = createApp(App);

// Usa Vue Router e Vuetify nell'app
app.use(router);
app.use(vuetify);

// Monta l'app sull'elemento con id 'app'
app.mount('#app');
