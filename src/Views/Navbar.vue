<template>
  <v-app-bar absolute elevate-on-scroll height="50%" color="#111" light>
    <div class="center">
      <v-btn text>
        <router-link to="/about" class="text navText"> About </router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/profil" class="text navText"> Profil </router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/work" class="text navText"> Work </router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/contact" class="text navText"> contact </router-link>
      </v-btn>
    </div>
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