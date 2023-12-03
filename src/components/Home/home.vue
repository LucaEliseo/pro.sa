<template>
  <v-row style="margin: 0 auto;">
    <!-- PROGETTO -->
    <v-col style="text-align: center" class="projectContainer" cols="12" md="6">
      <h1 class="title">PROGETTO</h1>
      <hr>
      <v-row>
        <v-col
          v-for="(progetto, index) in progetto"
          :key="index"
          cols="12"
          sm="6"
          md="6"
          xl="4"
        >
          <v-card  class="mx-auto card cardTitle" max-width="180">
            <v-img class="cardTitle" :src="progetto.img" height="180px" cover></v-img>
            <v-card-title class="cardTitle">{{ progetto.titolo }}</v-card-title>
            <v-card-subtitle  class="cardTitle">{{ progetto.tema }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <!-- CAMPAGNA -->
    <v-col
      style="text-align: center"
      class="campagnaContainer"
      cols="12"
      md="6"
    >
      <h1 class="title">CAMPAGNA</h1>
      <hr>
      <v-row>
        <v-col
          v-for="(campagna, index) in campagna"
          :key="index"
          cols="12"
          sm="6"
          md="6"
          xl="4"
        >
          <v-card class="mx-auto card" max-width="190">
            <v-img :src="campagna.img" height="180px" cover></v-img>
            <v-card-title class="cardTitle">{{ campagna.titolo }}</v-card-title>
            <v-card-subtitle class="cardTitle">{{ campagna.tema }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <div class="devicesContainer" style="text-align: center;">
    <h1 class="title">DEVICES</h1>
    <hr>

    <v-container fluid fill-width>
    <v-row class="d-flex justify-center align-center">
      <v-col
        style="padding: 2em;"
        v-for="(device, index) in device"
        :key="index"
        cols="12"
        s="12"
        sm="4"
        md="4"
        xl="2"
      >
        <v-card
          max-width="250px"
          class="card"
          style="margin: 20px; background-color: #d0e2ea;"
        >
          <v-img
            style="margin: 0 auto;"
            max-height="60px"
            max-width="220px"
            :src="device.img"
          ></v-img>
          <v-card-title>{{ device.titolo }}</v-card-title>
          <v-card-text>{{ device.valore }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  data() {
    return {
      progetto: [
        {
          img: require("../../assets/logo.png"),
          titolo: "Telemedicina",
          tema: "Consulenze mediche a distanza",
        },
        {
          img: "",
          titolo: "Gestione informazioni sanitarie",
          tema: "Sistemi avanzati di EHR/EMR",
        },
        {
          img: "",
          titolo: "IoT Sanita",
          tema: "Utilizzo di dispositivi connessi per il monitoraggio dei pazienti",
        },
        {
          img: "",
          titolo: "Intelligenza Artificiale",
          tema: "Applicazioni di AI per la diagnosi e la pianificazione dei trattamenti",
        },
        {
          img: "",
          titolo: "E-health",
          tema: "Sviluppo di piattaforme digitali per il coinvolgimento dei pazienti",
        },
        {
          img: "",
          titolo: "Sostenibilità in Sanità",
          tema: "Iniziative per ridurre l'impatto ambientale delle strutture sanitarie",
        },
      ],
      campagna: [
  {
    img: require("../../assets/logo.png"),
    titolo: "Vaccinazioneinfluenzale",
    tema: "Settore Ospedaliero"
  },
  {
    img: "",
    titolo: "Prevenzione delle Malattie",
    tema: "Settore Ospedaliero"
  },
  {
    img: "",
    titolo: "Cura delle Malattie Neurologiche",
    tema: "Settore Ospedaliero"
  },
  {
    img: "",
    titolo: "Screening del Cancro al Seno",
    tema: "Settore Ospedaliero"
  },
  {
    img: "",
    titolo: "Programma di Salute Mentale",
    tema: "Settore Ospedaliero"
  },
  {
    img: "",
    titolo: "Gestione del Diabete",
    tema: "Settore Ospedaliero"
  },
],

      device: [
        {img: require("../../assets/steps.png"), titolo: "STEPS" , valore: "451 PASSI" },
        {img: require("../../assets/distance.png"), titolo: "DISTANCES" , valore: "0,32 KM" },
        {img: require("../../assets/elevator.png"), titolo: "ELEVATOR" , valore: "2 PIANI SALITI" }
      ]
    };
  },
};
</script>
<style scoped>
.projectContainer,
.campagnaContainer {
  
  padding: 6em;
}

.title {
  color: #003183;
  font-size: 24px;
}

hr {
  border: 1px solid #e10b17;
  width: 30%;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 4em;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4);
}

.card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  padding: 1em;
  border-radius: 8px;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card img {
  transition: transform 0.3s ease-in-out;
}

.card:hover img {
  transform: scale(1.1);
}

.devicesContainer {
  padding: 2em;
}


.cardTitle:hover {
  white-space: normal;
}
</style>