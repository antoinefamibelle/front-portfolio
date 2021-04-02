<template>
  <div class="myContainer" style="text-align: justify; overflow: hidden">
    <v-row md="12" class="center">
      <v-col v-if="!$vuetify.breakpoint.mobile" md="3" />
      <v-col md="6" xs="12" sm="12">
        <h1 class="textMulti">Antoine Famibelle</h1>
        <h1
          v-if="!$vuetify.breakpoint.mobile"
          class="textMulti animText"
          style="font-size: 45px"
        >
          Developpeur FullStack&nbsp;
        </h1>
        <h1 v-else class="textMulti animText" style="font-size: 28px">
          Developpeur FullStack&nbsp;
        </h1>
      </v-col>
      <v-col md="3" />
    </v-row>
  </div>
</template>

<script>
import "../styles.css";
import "../../App.css";

export default {
  name: "Presentation",

  data() {
    return {};
  },
};
</script>

<style>
.textMulti {
  color: #fff;
  background: linear-gradient(
    271deg,
    #a0e9ff 30%,
    #a162e8 50%,
    #f093b0 70%,
    #edca85 94%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 122%;
  font-size: 60px;
  font-family: MontBold;
}

.animText {
  margin: 0px;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 4s steps(22, end) forwards, blink 1s infinite;
}

@keyframes typing {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes blink {
  0%,
  100% {
    border-right: 2px solid transparent;
  }
  50% {
    border-right: 2px solid #222;
  }
}

.myImg {
  border-radius: 24px;
}
</style>