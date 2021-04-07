<template>
  <v-row no-gutters style="height: 100%">
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      md="12"
      style="height: 100%; display: inline"
    >
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
              <v-img
                height="100vh"
                width="100%"
                :lazy-src="project.images[0].url"
              >
                <v-col
                  md="12"
                  style="width: 100%; height: 100%"
                  justify="center"
                  align-self="center"
                  justify-self="center"
                >
                  <div class="ProjectContainer">
                    <v-row align="center" justify="center">
                      <v-col md="12" style="text-align: center">
                        <v-row>
                          <v-col md="12">
                            <h1 class="text my-bg-white" style="color: black">
                              {{ project.title }}
                            </h1>
                          </v-col>
                          <v-col md="12">
                            <h3 class="text" style="color: black">
                              {{ project.description }}
                            </h3>
                          </v-col>
                          <v-col md="12">
                            <v-btn :href="project.url" target="_blank">
                              Voir en ligne
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-img>
            </v-sheet>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col v-else sm="12" md="12" xs="12" style="background-color: #111">
      <div v-for="(project, index) in projects" :key="index">
        <v-img :src="project.images[0].url" style="height: 100%"></v-img>
        <div class="ProjectContainerMobile">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="12" xs="12">
              <h1 class="text text-center">
                {{ project.title }}
              </h1>
            </v-col>
            <v-col cols="12" sm="12" md="12" xs="12">
              <h3 class="text text-center" style="margin-top: 5%">
                {{ project.description }}
              </h3>
            </v-col>

            <v-col cols="12" sm="12" md="12" xs="12">
              <v-btn
                style="margin-left: 23%"
                :href="project.url"
                target="_blank"
                >Voir le projet</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </div>
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
              url: "https://i.imgur.com/tnofS9E.png",
              id: "0",
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
          ],
        },
        {
          id: "3",
          title: "VetApp",
          url: "https://buddy-app.fr/",
          description: "Site de consultation veterinaire par vidéo-conference",
          images: [
            {
              url: "https://i.imgur.com/L9WfJ6v.png",
              id: "0",
            },
          ],
        },
        {
          id: "4",
          title: "Pertimm",
          url: "https://pertimm.com/",
          description: "Site vitrine de presentation d'une societe IT",
          images: [
            {
              url: "https://i.imgur.com/ROqyEsj.png",
              id: "0",
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
  height: 250px;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 20%;
  color: black;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.ProjectContainerMobile {
  height: 250px;
  margin: 10%;
  color: black;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.my-bg-white {
  background-color: white;
  border-radius: 24px;
  margin-right: 30%;
  margin-left: 30%;
}
</style>