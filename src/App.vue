<template class='respContainer'>
  <div id="#app" class="respContainer">
    <div id="nav">
      <Navbar />
    </div>
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Navbar from "./Layout/Navbar";
import "./App.css";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media only screen and (min-width: 1080px) {
  html,
  body {
    margin: 0;
    height: 100%;
    overflow-x: hidden;
  }
}

html,
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
}

.respContainer {
  height: 100vh;
}
</style>
