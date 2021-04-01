<template>
  <div>
    <div v-if="!$vuetify.breakpoint.mobile">
      <v-app-bar color="#111" dark style="width: 100%">
        <v-btn text color="#111">
          <router-link to="/">
            <v-img
              src="../assets/logo.png"
              height="30px"
              width="40px"
              style="margin-left: 15px; margin-right: 15px"
            />
            <h3 class="text">Antoine Famibelle</h3>
          </router-link>
        </v-btn>

        <v-spacer></v-spacer>
        <v-btn text color="#111">
          <router-link to="/about">
            <v-icon>mdi-account</v-icon>
            <h4 class="text">Presentation</h4>
          </router-link>
        </v-btn>
        <v-btn text color="#111">
          <router-link to="/realisation">
            <v-icon>mdi-briefcase-outline</v-icon>
            <h4 class="text">Realisation</h4>
          </router-link>
        </v-btn>
        <v-btn text color="#111">
          <router-link to="/competences">
            <v-icon>mdi-laptop</v-icon>
            <h4 class="text">Competences</h4>
          </router-link>
        </v-btn>
        <v-btn text color="#111">
          <router-link to="/contact">
            <v-icon>mdi-phone</v-icon>
            <h4 class="text">Contact</h4>
          </router-link>
        </v-btn>
      </v-app-bar>
    </div>
    <div v-else style="background-color: #111">
      <v-row>
        <v-col cols="12">
          <div class="text-center" justify-center>
            <v-btn color="blue" @click="overlay = !overlay">Menu</v-btn>
            <v-overlay :value="overlay">
              <v-row>
                <v-btn icon @click="overlay = false" href="#me">
                  <h3>Qui suis-je ?</h3>
                </v-btn>
              </v-row>
              <v-row>
                <v-btn icon @click="overlay = false" href="#skill">
                  <h3>Competences</h3>
                </v-btn>
              </v-row>
              <v-row>
                <v-btn icon @click="overlay = false" href="#xp">
                  <h3>Experiences</h3>
                </v-btn>
              </v-row>
              <v-row>
                <v-btn icon @click="overlay = false">
                  <h3>Contact</h3>
                </v-btn>
              </v-row>
              <v-row>
                <v-icon>mdi-close</v-icon>
              </v-row>
            </v-overlay>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import "../components/styles.css";

export default {
  name: "Navbar",
  data() {
    return {
      overlay: false,
    };
  },
};
</script>

<style scoped>
.navText:hover {
  text-decoration: underline;
}

navText {
  color: "white";
}
</style>