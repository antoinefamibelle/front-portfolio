<template>
  <div id="#app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view />
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
</style>
