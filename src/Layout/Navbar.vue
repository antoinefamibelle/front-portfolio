<template>
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
</template>

<script>
import "../components/styles.css";

export default {
  name: "Navbar",
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