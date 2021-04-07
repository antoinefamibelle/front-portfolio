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
              style="margin-left: 80px"
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
            <v-icon>mdi-console-network-outline</v-icon>
            <h4 class="text">Realisation</h4>
          </router-link>
        </v-btn>
        <v-btn text color="#111">
          <router-link to="/experiences">
            <v-icon>mdi-briefcase-outline</v-icon>
            <h4 class="text">Experiences</h4>
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
                <v-col cols="12">
                  <v-btn
                    icon
                    @click="overlay = false"
                    href="/"
                    style="text-align: center"
                  >
                    <h2 style="text-align: center">Accueil</h2>
                  </v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    icon
                    @click="overlay = false"
                    href="/about"
                    style="text-align: center"
                  >
                    <h2 style="text-align: center">Presentation</h2>
                  </v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    icon
                    @click="overlay = false"
                    href="/realisation"
                    style="text-align: center"
                  >
                    <h2 style="text-align: center">Realisation</h2>
                  </v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    icon
                    @click="overlay = false"
                    href="/experiences"
                    style="text-align: center"
                  >
                    <h2 style="text-align: center">Experiences</h2>
                  </v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    icon
                    @click="overlay = false"
                    href="/competences"
                    style="text-align: center"
                  >
                    <h2 style="text-align: center">Competences</h2>
                  </v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    icon
                    @click="overlay = false"
                    href="/contact"
                    style="text-align: center"
                  >
                    <h2 style="text-align: center">Contact</h2>
                  </v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn style="width: 150px" @click="overlay = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-col>
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