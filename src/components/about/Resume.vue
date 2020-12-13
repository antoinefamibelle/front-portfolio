<template>
  <v-container style="background-color: #111">
    <div class="myContainer" style="height: 80vh">
      <div class="center">
        <v-row md="12">
          <v-col md="6" class="rightAlign" style="padding: 10px">
            <v-img
              class="imgRound"
              src="https://www.seanhalpin.design/images/info/me@2x.png"
            />
          </v-col>
          <v-col md="6" class="leftAlign" style="padding: 10px">
            <v-row>
              <v-col md="12">
                <h2 class="title titleText">
                  I’m Seán, a Product Designer working remotely for Help Scout
                  on their mobile products in sunny Dublin, Ireland.
                </h2>
              </v-col>
              <v-col md="12">
                <h4 class="text">
                  I’ve spent the past 12+ years working across different areas
                  of digital design; front-end development, email design,
                  marketing site pages, app UI/UX, to my current role designing
                  products for mobile platforms. These days my time is spent
                  researching, designing, prototyping, and coding. I also help
                  designers get started with their careers. Out of the office
                  you’ll find me dreaming of soccer, playing bass guitar, and
                  petting all the good dogs.
                </h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import "../styles.css";

export default {
  name: "Resume",
};
</script>

<style>
.titleText {
  font-size: 35px;
}
</style>