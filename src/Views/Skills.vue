<template>
  <div style="background-color: #111; width: 100%; height: 100%">
    <v-row class="center">
      <v-col md="12">
        <div
          style="
            border-color: white;
            padding: 50px;
            border-width: 1px;
            border-style: solid;
            border-radius: 32px;
          "
        >
          <v-progress-circular
            v-for="item in Webs"
            :key="item.name"
            :rotate="-90"
            :size="100"
            :width="15"
            :value="item.level"
            :color="item.color"
            style="margin: 20px"
          >
            <span>{{ item.name }}</span>
          </v-progress-circular>
        </div>
      </v-col>
    </v-row>
  </div>
</template>



<style scoped>
span {
  color: white;
}
</style>

<script>
export default {
  name: "Skills",
  data() {
    return {
      Webs: [
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Html",
          level: 90,
          color: "#eb6228",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Css",
          level: 80,
          color: "#3796D0",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Boostrap",
          level: 90,
          color: "#6936B2",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Node.js",
          level: 80,
          color: "#74AB61",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "React.js",
          level: 85,
          color: "#60D4F7",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Vue.js",
          level: 90,
          color: "#42AE7D",
        },

        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Vuetify",
          level: 90,
          color: "#A9D7F8",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Quasar",
          level: 90,
          color: "#A9D7F8",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "MongoDb",
          level: 80,
          color: "#42AE7D",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Mongoose",
          level: 80,
          color: "#A9D7F8",
        },
      ],
      Mobiles: [
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Swift",
          level: 50,
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Flutter",
          level: 40,
          color: "#D90032",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "React Native",
          level: 40,
          color: "#60D4F7",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "PWA (Progressive Web App)",
          level: 70,
          color: "#60D4F7",
        },
      ],
      Others: [
        {
          name: "Francais",
          level: 93,
          score: "Langue Maternelle",
        },
        {
          name: "Anglais Toeic",
          level: 85,
          score: 880,
        },
      ],
    };
  },
};
</script>