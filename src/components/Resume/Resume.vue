<template>
  <div style="background-color: #111">
    <v-row md="12">
      <v-col
        v-if="!$vuetify.breakpoint.mobile"
        cols="12"
        md="6"
        sm="12"
        class="rightAlign"
        style="padding: 10%"
      >
        <v-img
          class="imgRound"
          src="../../assets/me.jpg"
          alt="This is a picture of me (Antoine Famibelle)"
          style="max-width: 100%; max-height: 100%; margin-left: 20%"
        />
      </v-col>
      <v-col v-else cols="12" sm="12" xs="12" style="padding: 10%">
        <v-img
          class="imgRound"
          src="../../assets/me.jpg"
          alt="This is a picture of me (Antoine Famibelle)"
          style="max-width: 100%; max-height: 100%"
        />
      </v-col>
      <v-col
        v-if="!$vuetify.breakpoint.mobile"
        md="6"
        class="leftAlign"
        style="padding: 10%"
      >
        <v-row>
          <v-col md="12" style="margin-top: 50px">
            <h2 class="text">
              Je suis Antoine, un etudiant en informatique mais aussi un Lead
              Developpeur Fullstack travaillant actuellement chez BigBagNGo
            </h2>
          </v-col>
          <v-col md="12" style="margin-top: 50px">
            <h3 class="text">
              Cela fait maintenant + de 3ans que je suis rentrer a Epitech Paris
              afin de devenir developpeur. Passionne par ce metier, j'ai lors de
              mes etudes decider de me lancer en Freelance afin de financer ces
              dernieres. Je suis un developpeur FullStack avec un preference
              pour le Front-End ainsi que avec une certaines sensibilites a l'UX
              et a l'UI. Sportif de haut niveau, j'ai pour valeur le
              professionalisme, l'effort, et le gout du travail bien fait.
            </h3>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-else xs="12" sm="12" md="12" style="padding: 10%">
        <v-col xs="12" sm="12" md="12">
          <h2 class="title titleText text" style="text-align: center">
            Je suis Antoine, un etudiant en informatique mais aussi un Lead
            Developpeur Web travaillant actuellement chez BigBagNGo.
          </h2>
        </v-col>
        <v-col xs="12" sm="12" md="12">
          <h4 class="text" style="text-align: center">
            Cela fait maintenant + de 3ans que je suis rentrer a Epitech Paris
            afin de devenir developpeur. Passionne par ce metier, j'ai lors de
            mes etudes decider de me lancer en Freelance afin de financer ces
            dernieres. Je suis un developpeur FullStack avec un preference pour
            le Front-End ainsi que avec une certaines sensibilites a l'UX et a
            l'UI. Sportif de haut niveau, j'ai pour valeur le professionalisme,
            l'effort, et le gout du travail bien fait.
          </h4>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Resume",
};
</script>

<style>
.titleText {
  font-size: 35px;
}
</style>