<template>
  <div>
    <v-card>
      <v-app-bar absolute dark elevate-on-scroll height="100">
        <div>
          <router-link to="/">
            <v-img max-height="150" max-width="250" src="../assets/logo.png" />
          </router-link>
        </div>

        <v-spacer></v-spacer>

        <div>
          <v-btn>
            <v-icon medium color="#f37c48">mdi-home</v-icon>
            <router-link to="/Presentation" style="color: #f37c48">
              Home
            </router-link>
          </v-btn>
          <v-btn>
            <v-icon medium color="#f37c48">mdi-account</v-icon>
            <router-link to="/profil" style="color: #f37c48">
              Profil
            </router-link>
          </v-btn>

          <v-btn @click="logout" to="/" style="color: #f37c48">
            <v-icon medium color="#f37c48">mdi-phone</v-icon>
            Contact
          </v-btn>
        </div>
      </v-app-bar>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data: function () {
    return {};
  },
};
</script>