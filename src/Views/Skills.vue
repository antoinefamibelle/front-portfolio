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
          <h2 style="color: white; margin-bottom: 15px">Technologie Web</h2>
          <v-progress-circular
            v-for="item in Webs"
            :key="item.name"
            :rotate="-90"
            :size="100"
            :width="15"
            :value="item.level"
            :color="item.color"
            style="margin: 15px"
          >
            <p style="margin: 20px; font-size: 13px" class="text">
              {{ item.name }}
            </p>
          </v-progress-circular>
        </div>
      </v-col>
      <v-col md="6">
        <div
          style="
            border-color: white;
            padding: 50px;
            border-width: 1px;
            border-style: solid;
            border-radius: 32px;
          "
        >
          <h2 style="color: white; margin-bottom: 15px">Technologie Mobile</h2>
          <v-progress-circular
            v-for="item in Mobiles"
            :key="item.name"
            :rotate="-90"
            :size="100"
            :width="15"
            :value="item.level"
            :color="item.color"
            style="margin: 15px"
          >
            <p style="margin: 20px; font-size: 13px" class="text">
              {{ item.name }}
            </p>
          </v-progress-circular>
        </div>
      </v-col>
      <v-col md="6">
        <div
          style="
            border-color: white;
            padding: 50px;
            border-width: 1px;
            border-style: solid;
            border-radius: 32px;
          "
        >
          <h2 style="color: white; margin-bottom: 15px">DevOps</h2>
          <v-progress-circular
            v-for="item in DevOps"
            :key="item.name"
            :rotate="-90"
            :size="100"
            :width="15"
            :value="item.level"
            :color="item.color"
            style="margin: 15px"
          >
            <p style="margin: 20px; font-size: 13px" class="text">
              {{ item.name }}
            </p>
          </v-progress-circular>
        </div>
      </v-col>
      <v-col md="12">
        <div
          style="
            border-color: white;
            padding: 25px;
            border-width: 1px;
            border-style: solid;
            border-radius: 32px;
          "
        >
          <h2 style="color: white; margin-bottom: 15px">Librairie / Tools</h2>
          <v-progress-circular
            v-for="item in Others"
            :key="item.name"
            :rotate="-90"
            :size="100"
            :width="15"
            :value="item.level"
            :color="item.color"
            style="margin: 20px"
          >
            <p style="margin: 20px; font-size: 13px" class="text">
              {{ item.name }}
            </p>
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
          name: "Node.js",
          level: 85,
          color: "#74AB61",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Typescript",
          level: 65,
          color: "white",
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
          name: "MongoDb",
          level: 85,
          color: "#A9D7F8",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Mongoose",
          level: 85,
          color: "#A9D7F8",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Prisma",
          level: 75,
          color: "purple",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Strapi",
          level: 80,
          color: "purple",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Nest.Js",
          level: 80,
          color: "white",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Next.Js",
          level: 80,
          color: "green",
        },
      ],
      Mobiles: [
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "React Native",
          level: 80,
          color: "#60D4F7",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "PWA (Progressive Web App)",
          level: 75,
          color: "#60D4F7",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Swift",
          level: 35,
          color: "white",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Flutter",
          level: 35,
          color: "#D90032",
        },
      ],
      DevOps: [
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Github",
          level: 90,
          color: "white",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Gitlab",
          level: 90,
          color: "white",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Docker",
          level: 75,
          color: "blue",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Jest",
          level: 75,
          color: "green",
        },
      ],
      Others: [
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Quasar",
          level: 90,
          color: "#42AE7D",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Vuetify",
          level: 90,
          color: "#42AE7D",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Vuesax",
          level: 90,
          color: "#42AE7D",
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
          name: "Fastify",
          level: 75,
          color: "blue",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "Express.js",
          level: 90,
          color: "yellow",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "RapidApi",
          level: 90,
          color: "orange",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "ApiDoc",
          level: 90,
          color: "red",
        },
        {
          logo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blog-nouvelles-technologies.fr%2F2312%2Fhtml5-ou-html-la-question-se-pose%2F&psig=AOvVaw2SaUGiuxy1TtXH7KAHefnq&ust=1589414369428000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiV7ojEr-kCFQAAAAAdAAAAABAZ",
          name: "SwaggerUI",
          level: 80,
          color: "grey",
        },
      ],
    };
  },
};
</script>