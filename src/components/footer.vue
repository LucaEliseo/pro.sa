<template>
  <footer style="bottom: 0">
    <div class="firstFooter">
      <img src="../assets/logo.png" alt="Logo" />
    </div>
    <div class="secondFooter">
      <h5>copyright &copy; 2023 Gesan SRL , all right reserved</h5>
    </div>
  </footer>
</template>
<script>
export default {
  name: "customFooter",
};
</script>

<style scoped>
.firstFooter {
  height: 100px;
  background-color: #0059b3;
  display: flex;
  justify-content: center;
  padding: 0.8em;
  margin-top: 5em;
}

.secondFooter {
  height: 30px;
  background-color: #003183;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8em;
}

h5 {
  color: white;
}
</style>
