<template>
  <v-row justify="center" align="center" style="height: 100%; width: 100%">
    <v-col sm="12" xs="12" md="12" lg="12">
      <h1 class="textError" style="color: black; font-size: 50px">Error 404</h1>
      <h3 class="textError" style="color: black; font-size: 40px">
        On dirait que vous vous etes perdu ...
      </h3>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style>
.textError {
  font-family: Mont;
  color: white;
  text-align: center;
}
</style>