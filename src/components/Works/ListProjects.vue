<template>
  <div>
    <div v-for="project in projects" :key="project.id">
      <div class="ProjectContainer">
        <v-row align="center" justify="center">
          <v-col md="12">
            <ProjectCard :project="project" />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ListProjects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          id: "0",
          title: "ClicknLerins",
          description: "Le site marchand de la mairie de cannes",
          image:
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          technologie: [
            {
              name: "Vue.js",
              logo:
                "https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png",
            },
            {
              name: "Vue.js",
              logo:
                "https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png",
            },
            {
              name: "Vue.js",
              logo:
                "https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png",
            },
            {
              name: "Vue.js",
              logo:
                "https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png",
            },
          ],
        },
        {
          id: "1",
          title: "Leclerc",
          description: "Le site marchand de la mairie de cannes",
          image:
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          technologie: [
            {
              name: "Vue.js",
              logo:
                "https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png",
            },
            {
              name: "Vue.js",
              logo:
                "https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png",
            },
            {
              name: "Vue.js",
              logo:
                "https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png",
            },
            {
              name: "Vue.js",
              logo:
                "https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png",
            },
          ],
        },
        {
          id: "2",
          title: "Prout",
          description: "Le site marchand de la mairie de cannes",
          image:
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          technologie: [
            {
              name: "Vue.js",
              logo:
                "https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png",
            },
            {
              name: "Vue.js",
              logo:
                "https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png",
            },
            {
              name: "Vue.js",
              logo:
                "https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png",
            },
            {
              name: "Vue.js",
              logo:
                "https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.ProjectContainer {
  height: 100vh;
  width: 100%;
}
</style>