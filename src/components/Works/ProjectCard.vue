<template>
  <div class="ProjectCard">
    <v-row align="center" justify="center">
      <v-col md="4">
        <v-img :src="project.image" class="myImg" />
      </v-col>
      <v-col md="8" style="text-align: center">
        <v-row>
          <v-col md="12">
            <h1>{{ project.title }}</h1>
          </v-col>
          <v-col md="12">
            <h3>{{ project.description }}</h3>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import "../styles.css";
export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
};
</script>

<style scoped>
.ProjectCard {
  background-color: #111;
  padding: 50px;
  margin-top: 10%;
  height: 80%;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 24px;
}

h1 {
  color: white;
}

h3 {
  color: white;
}

.myImg {
  border-radius: 24px;
  padding-top: 10%;
}
</style>