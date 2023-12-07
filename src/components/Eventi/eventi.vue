<template>
  <v-col style="text-align: center" class="eventiContainer" cols="12" md="12">
    <h1 class="title">Eventi</h1>
    <hr />
  </v-col>

  <v-container>
    <v-data-table
      class="container"
      :headers="columns"
      :items="eventi"
      :search="searchEventi"
      hide-default-footer
    >
      <template v-slot:items="props">
        <td>{{ props.item.titolo }}</td>
        <td>{{ props.item.tema }}</td>
        <td>{{ props.item.data }}</td>
        <td>{{ props.item.luogo }}</td>
        <td>{{ props.item.stato }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "eventi",
  data() {
    return {
      columns: [
        { title: "Titolo", dataIndex: "titolo", key: "titolo" },
        { title: "Tema", dataIndex: "tema", key: "tema" },
        { title: "Data", dataIndex: "data", key: "data" },
        { title: "Luogo", dataIndex: "luogo", key: "luogo" },
        { title: "Stato", dataIndex: "stato", key: "stato" },
      ],
      eventi: [
        {
          titolo: "Evento 1",
          tema: "Tema 1",
          data: "2023-01-01",
          luogo: "Luogo 1",
          stato: "Confermato",
        },
        {
          titolo: "Evento 2",
          tema: "Tema 2",
          data: "2023-02-01",
          luogo: "Luogo 2",
          stato: "In sospeso",
        },
        {
          titolo: "Evento 3",
          tema: "Tema 3",
          data: "2023-06-01",
          luogo: "Luogo 3",
          stato: "Confermato",
        },
        {
          titolo: "Evento 4",
          tema: "Tema 4",
          data: "2024-01-01",
          luogo: "Luogo 4",
          stato: "In sospeso",
        },
      ],
    };
  },
};
</script>

<style scoped>
.eventiContainer {
  margin-top: -30px;
  padding: 6em;
}

.container {
  margin-bottom: 2em;
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
  margin-bottom: 2em;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4);
}
</style>
