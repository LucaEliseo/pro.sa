import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import Home from "./components/Home/home.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },

    { path: "/home", component: () => import("./components/Home/home.vue") },
    {
      path: "/configurazione",
      component: () => import("./components/Config/configurazione.vue"),
    },
    {
      path: "/campagna",
      component: () => import("./components/Campagna/campagna.vue"),
    },
    {
      path: "/progetto",
      component: () => import("./components/Progetto/progetto.vue"),
    },
    {
      path: "/preferiti",
      component: () => import("./components/Preferiti/preferiti.vue"),
    },
    {
      path: "/eventi",
      component: () => import("./components/Eventi/eventi.vue"),
    },
  {
    path: "/devices",
    component: () => import("./components/Devices/devices.vue")
  }
  ],
});

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: "mdiSvg",
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount("#app");
