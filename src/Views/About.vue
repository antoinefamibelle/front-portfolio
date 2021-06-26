<template>
  <div style="height: 100%; overflow: hidden">
    <Resume />
  </div>
</template>

<script>
import "../components/styles.css";

import Resume from "../components/Resume/Resume.vue";

export default {
  name: "About",
  components: {
    Resume,
  },
};
</script>

<style>
</style>
