
<template>
   <v-row>
       <v-col style="text-align: center "  cols="12" md="12">
      <h1 class="title">CONFIGURAZIONI</h1>
      <hr>
      <v-icon class="icon">mdi-cog</v-icon>
      </v-col>
    </v-row>
   
      <v-container>
       
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field   label="Nome" ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field  label="Cognome" ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field  label="Luogo di Nascita" ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field  label="ASL di Appartenenza" ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Distretto di Appartenenza" r></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select label="Temi di Interesse" ></v-select>
            </v-col>
            <v-col style="text-align: center; margin-top: 1em;" cols="12" s="12" md="12">
              <v-btn style="border-radius: 50px; width: 150px; ;"  type="submit" color="#f0868c" >MODIFICA</v-btn>
            </v-col>
          </v-row>
      
      </v-container>
   
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'configurazione',
 
  };
  </script>
  
  <style>
.title {
  color: #003183;
  font-size: 24px;
  margin-top: 2em ;
  margin-bottom: 2em;
}

hr {
  border: 1px solid #e10b17;
  width: 20%;
  margin: 0 auto;
  margin-top: em;
  margin-bottom: 3em;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4);
}

.icon{
  margin-bottom: 2em;
}
  </style>
  