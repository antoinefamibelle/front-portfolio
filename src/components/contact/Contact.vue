<template>
  <v-container style="background-color: #111">
    <div class="myContainer" style="height: 80vh">
      <v-row>
        <v-col md="12">
          <h1 class="title" style="text-align: center">
            Alors ? Pret a faire connaissance ?
          </h1>
        </v-col>
        <v-col md="12" align="center">
          <div class="CardContact">
            <v-text-field
              class="myInput"
              label="Name"
              outlined
              light
              clearable
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import "../styles.css";

export default {
  name: "ContactPage",
};
</script>

<style>
.CardContact {
  border: 1px solid white;
  border-radius: 24px;
  height: 60vh;
  width: 80%;
  text-align: center;
}
</style>