<template>
  <v-col
  style="text-align: center"
  class="progettoContainer"
  cols="12"
  md="12"
>
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
      <v-card class="mx-auto card" max-width="300">
        <v-img :src="progetto.img" height="300px" cover></v-img>
        <v-card-title class="cardTitle">{{ progetto.titolo }}</v-card-title>
        <v-card-subtitle class="cardTitle">{{ progetto.tema }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</v-col>
<div class="text-center">
<v-pagination
  v-model="page"
  :length="4"
  rounded="circle"
  disab
></v-pagination>
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

   
  };
},
};
</script>
<style scoped>

.progettoContainer {
 margin-top: -30px;
  padding: 6em;
}

.title {
  color: #003183;
  font-size: 35px;
}

hr {
  border: 1px solid #e10b17;
  width: 30%;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 5em;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4);
}

.card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  padding: 1em;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 50px;
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

.cardTitle:hover {
  white-space: normal;
}
</style>