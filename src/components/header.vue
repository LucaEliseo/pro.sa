<template>
  <div class="firstHeader"></div>

  <v-app style="min-height: 0; max-height: 90px; overflow-y: hidden">
    <v-app-bar class="secondHeader">
      <v-row align="center">
        <v-col cols="auto">
          <router-link to="/home">
            <img src="../assets/logo.png" alt="Logo" />
          </router-link>
        </v-col>
        <v-col></v-col>
        <v-col cols="auto" class="social-icons">
          <v-btn icon>
            <a href="https://facebook.com/" target="_blank">
              <v-icon color="white">mdi-facebook</v-icon>
            </a>
          </v-btn>
          <v-btn icon>
            <a href="https://linkedin.com/" target="_blank">
              <v-icon color="white">mdi-linkedin </v-icon>
            </a>
          </v-btn>
          <v-btn icon>
            <a href="https://instagram.com/" target="_blank">
              <v-icon color="white">mdi-instagram</v-icon>
            </a>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-menu v-model="menu" :close-on-content-click="false" offset-y>
            <template  v-slot:activator="{ props }">
              <v-btn style="margin-right: 30px;" color="white" v-bind="props" icon>
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-card class="menu-card">
              <v-list>
                <v-list-item
                  class="itemAvatar"
                  prepend-avatar="https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head-thumbnail.png"
                  title="Luca Eliseo"
                  subtitle="Admin"
                >
                  <template v-slot:append>
                    <v-btn variant="text" icon="mdi-logout"></v-btn>
                  </template>
                </v-list-item>
              </v-list>

              <v-list>
                <v-list-item-group>
                  <v-list-item v-for="(item, index) in menuItems" :key="index" @click="navigateTo(item.path)">
                    <v-icon>{{ item.icon }}</v-icon>
                    <span>{{ item.text }}</span>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-menu>
        </v-col>
      </v-row>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "menuNavi",
  data: () => ({
    menu: false,
    menuItems: [
      { text: "Home", path: "/home", icon: "mdi-home" },
      { text: "Progetti", path: "/progetti", icon: "mdi-play" },
      { text: "Campagne", path: "/campagne", icon: "mdi-play" },
      { text: "Preferiti", path: "/preferiti", icon: "mdi-heart" },
      { text: "Eventi", path: "/eventi", icon: "mdi-calendar" },
      { text: "Configurazioni", path: "/configurazione", icon: "mdi-cog" },
      { text: "Devices", path: "/devices", icon: "mdi-devices" },
    ],
  }),
  methods: {
    navigateTo(path) {
      this.$router.push(path);
      this.menu = false;
    },
  },
};
</script>

<style scoped>
.firstHeader {
  height: 30px;
  background-color: #003183;
}

.secondHeader {
  position: static !important;
  background-color: #0059b3 !important;
  padding: 0.5em;
}

img {
  height: 60px;
  margin-left: 2em;
  cursor: pointer;
}

.social-icons {
  margin-left: auto; /* Sposta le icone a destra */
}

.menu-card {
  max-width:400px;
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 30px;
  margin-top: 30px;
}

.v-list-item {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.v-list-item:hover {
  background-color: #e0e0e0;
}

.v-list-item .v-icon {
  margin-right: 15px;
}

a {
  text-decoration: none;
}

a:visited {
  text-decoration: black;
}
</style>
