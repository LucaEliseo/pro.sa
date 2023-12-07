<template>
  <v-col style="text-align: center" class="campagnaContainer" cols="12" md="12">
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
        <v-card class="mx-auto card" max-width="300">
          <v-img :src="campagna.img" height="300px" cover></v-img>
          <v-card-title class="cardTitle">{{ campagna.titolo }}</v-card-title>
          <v-card-subtitle class="cardTitle">{{
            campagna.tema
          }}</v-card-subtitle>
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
      campagna: [
        {
          img: require("../../assets/logo.png"),
          titolo: "Vaccinazione influenzale",
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
.campagnaContainer {
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
