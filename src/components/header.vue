<template>
  <div class="firstHeader"></div>

  <v-app style="min-height: 0; max-height: 90px; overflow-y: hidden;">
    <v-app-bar class="secondHeader">
      <v-row>
        <img src="../assets/logo.png" alt="Logo" />
      </v-row>

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

      <v-menu v-model="menu" :close-on-content-click="false" location="end">
        <template v-slot:activator="{ props }">
          <v-btn color="white" v-bind="props" icon="mdi-menu"> </v-btn>
        </template>

        <v-card style="background-color: #a0caef;" min-width="250">
          <v-list >
            <v-list-item
            class="itemAvatar"
              prepend-avatar="https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head-thumbnail.png"
              title="Luca Eliseo"
              subtitle="Admin"
            >
              <template v-slot:append>
                <v-btn  variant="text" icon="mdi-logout"></v-btn>
              </template>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
             <router-link to="/home"><v-icon icon="mdi-home" color="black"></v-icon>
              Home
            </router-link> 
            </v-list-item>
            <v-list-item style="cursor: pointer;">
              <v-icon  icon="mdi-play" color="black"></v-icon>
              Progetti
            </v-list-item>
            <v-list-item style="cursor: pointer;">
              <v-icon  icon="mdi-play" color="black"></v-icon>
              Campagne
            </v-list-item>
            <v-list-item style="cursor: pointer;">
              <v-icon  icon="mdi-heart" color="black"></v-icon>
              Preferiti
            </v-list-item>
            <v-list-item style="cursor: pointer;">
              <v-icon  icon="mdi-calendar" color="black"></v-icon>
              Eventi
            </v-list-item>
            <v-list-item style="cursor: pointer;">
              <v-icon  icon="mdi-cog" color="black"></v-icon>
              Configurazioni
            </v-list-item>
            <v-list-item style="cursor: pointer;">
              <v-icon  icon="mdi-devices" color="black"></v-icon>
              Devices
            </v-list-item>
           
          </v-list>
          
          
        </v-card>
      </v-menu>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data: () => ({
    menu: false,
  }),
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


.v-list-item {
  cursor: pointer;
  transition: background-color 0.3s ease; 
}
.v-list-item .v-icon {
  margin-right: 15px;
}

.v-list-item:hover {
  background-color: #f0f0f0; 
}

a{
  text-decoration: none;
}

a:visited{
  color: black;
}

</style>
