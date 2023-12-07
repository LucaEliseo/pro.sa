<template>
  <v-row style="margin: 0 auto">
    <!-- PROGETTO -->
    <v-col style="text-align: center" class="projectContainer" cols="12" md="6">
      <h1 class="title">PROGETTO</h1>
      <hr />
      <v-row>
        <v-col
          v-for="(progetto, index) in progetto"
          :key="index"
          cols="12"
          sm="6"
          md="6"
          xl="4"
        >
          <v-card class="mx-auto card cardTitle" max-width="180">
            <v-img
              class="cardTitle"
              :src="progetto.img"
              height="180px"
              cover
            ></v-img>
            <v-card-title class="cardTitle">{{ progetto.titolo }}</v-card-title>
            <v-card-subtitle class="cardTitle">{{
              progetto.tema
            }}</v-card-subtitle>
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
      <hr />
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
            <v-card-subtitle class="cardTitle">{{
              campagna.tema
            }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
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
          tema: "Settore Ospedaliero",
        },
        {
          img: "",
          titolo: "Prevenzione delle Malattie",
          tema: "Settore Ospedaliero",
        },
        {
          img: "",
          titolo: "Cura delle Malattie Neurologiche",
          tema: "Settore Ospedaliero",
        },
        {
          img: "",
          titolo: "Screening del Cancro al Seno",
          tema: "Settore Ospedaliero",
        },
        {
          img: "",
          titolo: "Programma di Salute Mentale",
          tema: "Settore Ospedaliero",
        },
        {
          img: "",
          titolo: "Gestione del Diabete",
          tema: "Settore Ospedaliero",
        },
      ],
    };
  },
};
</script>
<style scoped>
.projectContainer,
.campagnaContainer {
  margin-top: -20px;
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
  margin-bottom: 30px;
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
  margin-top: -50px;
}
</style>
