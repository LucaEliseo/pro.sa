<template>
  <v-row>
    <!-- PROGETTO -->
    <v-col style="text-align: center" class="projectContainer" cols="12" md="6">
      <h1>PROGETTO</h1>
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
          <v-card class="mx-auto card" max-width="180">
            <v-img :src="progetto.img" height="180px" cover></v-img>
            <v-card-title>{{ progetto.titolo }}</v-card-title>
            <v-card-subtitle>{{ progetto.tema }}</v-card-subtitle>
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
      <h1>CAMPAGNA</h1>
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
          <v-card class="mx-auto card" max-width="180">
            <v-img :src="campagna.img" height="180px" cover></v-img>
            <v-card-title>{{ campagna.titolo }}</v-card-title>
            <v-card-subtitle>{{ campagna.tema }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <!-- DEVICES -->
 
  <v-row>
    <v-col style="text-align: center" class="devicesContainer" cols="12" s="12">
      <h1>DEVICES</h1>
      <hr />
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
          img: "https://blog.osservatori.net/hubfs/sanita-digitale-guida-img-evidenza.jpg",
          titolo: "Telemedicina",
          tema: "Consulenze mediche a distanza",
        },
        {
          img: "https://blog.osservatori.net/hubfs/sanita-digitale-guida-img-evidenza.jpg",
          titolo: "Gestione informazioni sanitarie",
          tema: "Sistemi avanzati di EHR/EMR",
        },
        {
          img: "https://blog.osservatori.net/hubfs/sanita-digitale-guida-img-evidenza.jpg",
          titolo: "IoT Sanita",
          tema: "Utilizzo di dispositivi connessi per il monitoraggio dei pazienti",
        },
        {
          img: "https://blog.osservatori.net/hubfs/sanita-digitale-guida-img-evidenza.jpg",
          titolo: "Intelligenza Artificiale",
          tema: "Applicazioni di AI per la diagnosi e la pianificazione dei trattamenti",
        },
        {
          img: "https://blog.osservatori.net/hubfs/sanita-digitale-guida-img-evidenza.jpg",
          titolo: "E-health",
          tema: "Sviluppo di piattaforme digitali per il coinvolgimento dei pazienti",
        },
        {
          img: "https://blog.osservatori.net/hubfs/sanita-digitale-guida-img-evidenza.jpg",
          titolo: "Sostenibilità in Sanità",
          tema: "Iniziative per ridurre l'impatto ambientale delle strutture sanitarie",
        },
      ],
      campagna: [
        {
          img: "https://www.sanitainformazione.it/wp-content/uploads/2023/03/ministero_salute_violenza_us.jpeg",
          titolo: "Campagna 1",
          tema: "Settore Ospedaliero",
        },
        {
          img: "https://www.sanitainformazione.it/wp-content/uploads/2023/03/ministero_salute_violenza_us.jpeg",
          titolo: "Campagna 2",
          tema: "Settore Ospedaliero",
        },
        {
          img: "https://www.sanitainformazione.it/wp-content/uploads/2023/03/ministero_salute_violenza_us.jpeg",
          titolo: "Campagna 3",
          tema: "Settore Ospedaliero",
        },
        {
          img: "https://www.sanitainformazione.it/wp-content/uploads/2023/03/ministero_salute_violenza_us.jpeg",
          titolo: "Campagna 4",
          tema: "Settore Ospedaliero",
        },
        {
          img: "https://www.sanitainformazione.it/wp-content/uploads/2023/03/ministero_salute_violenza_us.jpeg",
          titolo: "Campagna 5",
          tema: "Settore Ospedaliero",
        },
        {
          img: "https://www.sanitainformazione.it/wp-content/uploads/2023/03/ministero_salute_violenza_us.jpeg",
          titolo: "Campagna 6",
          tema: "Settore Ospedaliero",
        },
      ],
    };
  },
};
</script>

<style scoped>
.projectContainer,
.devicesContainer,
.campagnaContainer {
  margin-top: 4em;
}

h1 {
  color: #003183;
}

hr {
  border: 1px solid #e10b17;
  width: 30%;
  margin: 3em auto;
}

.card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  padding: 0.5em;
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
</style>
