<template>
  <v-col
  style="text-align: center"
  class="preferitiContainer"
  cols="12"
  md="12"
>
  <h1 class="title">PREFERITI</h1>
  <hr>
  <v-row>
    <v-col >
    <p>Nessun Elemento</p>
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
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: ' preferiti'
}
</script>

<style scoped>

.preferitiContainer {
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
    margin-bottom: 4em;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4);
  }
  
  p{
    margin-bottom: 13.5em;
  }
</style>