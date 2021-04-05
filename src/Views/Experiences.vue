<template>
  <div style="height: 100%; background-color: #111">
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
      >
        <div class="myContainerGlass">
          <h1 class="title text text-center">{{ item.title }}</h1>
          <p class="text text-center" style="margin-top: 5px">
            {{ item.description }}
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "Experiences",
  data: () => ({
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-alpha-b-box-outline",
        description:
          "Lead Developpeur dans une start-up florissante dans le but d'internaliser toute la partie IT (Site Vitrine, Application, Intra, BackOffice, Application Embarquer). Je travaille en collaboration étroite avec le CTO afin de trouver les meilleurs solutions techniques a nos différentes problématiques.",
        title: "BigBagNGo | En Poste | Lead Developpeur Fullstack",
      },
      {
        color: "blue lighten-2",
        icon: "mdi-robot-excited-outline",
        description:
          "Lead Developpeur FullStack sur des projets tel que la creation de MarketPlace. Notamment avec la realisation de la plateforme de ClickNCollect de Leclerc ainsi que celle de la mairie de Cannes. J'ai aussi été Lead developpeur sur des projets comme de l'AR / VR et aussi de l'Intelligence Artificielle avec la creation d'un chatbot.",
        title:
          "Pertimm | Durée: 6 mois | Lead Developpeur FullStack / Chef de Projet",
      },
      {
        color: "red lighten-2",
        icon: "mdi-school-outline",
        description:
          "Formateur Vue.js auprès d'élèves de 3ème année en développement web en amphithéâtre. Formation en cours. Déjà +15 heures réalisées, un test de validation des acquis et un accompagnement des élèves sur leurs projets.",
        title: "Akatek | Durée: 1 mois | Formateur Vue.js",
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant",
        description:
          "Différentes missions Web (Vue.js / React.js / Angular.js) afin de répondre à différents besoins clients. Autoentrepreneur en développement de site web, en maintenance et formation.",
        title:
          "Developpeur Freelance  | Depuis : 2 années | Developpeur Fullstack",
      },
      {
        color: "green lighten-1",
        icon: "mdi-car-outline",
        description:
          "Stage de 6 mois en tant que développeur web Fullstack pour une startup (Spid-Tech) spécialisée dans la création et fourniture de sites web clefs dédiés aux concessionnaires. Technologies utilisées : Vue.js, Node.js, PHP, Mysql, Prestashop.",
        title: "SpidTech | Stage de 6 Mois | Developpeur Fullstack",
      },
      {
        color: "indigo",
        icon: "mdi-trophy-outline",
        description:
          "Realisation de differents hackthon pour Nike / La Societe Generale / KissKissBankBank. Realisation d'application Mobile / site Web / Algorythme ou encore Bot de trading dans un temps limite",
        title: "Hackathon",
      },
    ],
  }),
};
</script>

<style>
.myContainerGlass {
  color: black;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-left: 15px;
  margin-right: 15px;
}
</style>