<template>
    <v-col style="text-align: center" class="deviceContainer" cols="12" md="12">
      <h1 class="title">DEVICES</h1>
      <hr />
      <v-row>
        <v-col
          v-for="(device, index) in device"
          :key="index"
          cols="12"
          sm="6"
          md="6"
          xl="4"
        >
          <v-card class="mx-auto card" max-width="300">
            <v-img :src="device.img" height="300px" cover></v-img>
            <v-card-title class="cardTitle">{{ device.titolo }}</v-card-title>
            <v-card-subtitle class="cardTitle">{{
              device.tema
            }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
 
  </template>
<script>
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'devices',
    data(){
        return{
            device: [
        {img: require("../../assets/steps.png"), titolo: "STEPS" , valore: "451 PASSI" },
        {img: require("../../assets/distance.png"), titolo: "DISTANCES" , valore: "0,32 KM" },
        {img: require("../../assets/elevator.png"), titolo: "ELEVATOR" , valore: "2 PIANI SALITI" }
      ]
        }
    }
}
</script>

<style scoped>
.deviceContainer {
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

</style>