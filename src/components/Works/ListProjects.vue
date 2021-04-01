<template>
  <v-row no-gutters style="height: 100%">
    <v-col md="12" style="height: 100%; display: inline">
      <v-carousel
        cycle
        height="100%"
        hide-delimiter-background
        show-arrows-on-hover
        style="width: 100%"
      >
        <v-carousel-item v-for="project in projects" :key="project.id">
          <v-row align="center" justify="center">
            <v-sheet height="100%" style="width: 100%; background-color: #111">
              <v-img max-height="1000px" :src="project.images[0].url">
                <div class="ProjectContainer">
                  <v-row align="center" justify="center">
                    <v-col md="12" style="text-align: center">
                      <v-row>
                        <v-col md="12">
                          <h1>{{ project.title }}</h1>
                        </v-col>
                        <v-col md="12">
                          <h3>{{ project.description }}</h3>
                        </v-col>
                        <v-col md="12">
                          <v-btn :href="project.url" target="_blank">
                            Voir en ligne</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </div>
              </v-img>
            </v-sheet>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ListProjects",
  data() {
    return {
      projects: [
        {
          id: "0",
          title: "ClicknLerins",
          url: "https://clicknlerins.fr/",
          description:
            "Le site marchand de la mairie de cannes en Click & Collect",
          images: [
            {
              url: "https://i.imgur.com/DQNnhXz.png",
              id: "0",
            },
            {
              url: "https://i.imgur.com/NV64zTC.png",
              id: "1",
            },
            {
              url: "https://i.imgur.com/5CwOzif.png",
              id: "2",
            },
          ],
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
          title: "E.Leclerc",
          url: "https://verdun.e-reservation.leclerc/",
          description:
            "Le site de E-Reservation et de Click & Collect pour la celebre enseigne E.Leclerc",
          images: [
            {
              url: "https://i.imgur.com/H75Al8i.png",
              id: "0",
            },
            {
              url: "https://i.imgur.com/YqWPPxV.png",
              id: "1",
            },
            {
              url: "https://i.imgur.com/wUBNekB.png",
              id: "2",
            },
            {
              url: "https://i.imgur.com/i0y2Xah.png",
              id: "3",
            },
          ],
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
          title: "Buddy",
          url: "https://buddy-app.fr/",
          description: "Le site vitrine d'un projet de fin d'etudes etudiant",
          images: [
            {
              url: "https://i.imgur.com/YxW39at.png",
              id: "0",
            },
            {
              url: "https://i.imgur.com/iP99e6r.png",
              id: "1",
            },
            {
              url: "https://i.imgur.com/h1wzDzl.png",
              id: "1",
            },
          ],
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
  height: 100%;
  width: 80%;
  background-color: rgba (0, 0, 0, 0.5);
}
</style>