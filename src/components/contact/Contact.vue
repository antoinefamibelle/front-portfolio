<template>
  <v-container style="background-color: #111">
    <div class="myContainer" style="height: 80vh">
      <v-row>
        <v-col md="12">
          <h1 class="title" style="text-align: center">
            Alors ? Pret a faire connaissance ?
          </h1>
        </v-col>
        <v-col md="12" align="center">
          <div class="CardContact">
            <v-row>
              <v-col>
                <v-text-field
                  class="myInput"
                  style="margin: 20px"
                  label="Votre nom"
                  shaped
                  outlined
                  dark
                  clearable
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  class="myInput"
                  style="margin: 20px"
                  label="Votre email"
                  shaped
                  outlined
                  dark
                  clearable
                  :rules="[rules.required, rules.email]"
                ></v-text-field>
              </v-col>
              <v-col md="12">
                <v-text-field
                  class="myInput"
                  style="margin: 20px"
                  label="Sujet de votre Email"
                  shaped
                  outlined
                  dark
                  clearable
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="myInput"
                  style="margin: 20px; height: 250px"
                  label="Votre message"
                  shaped
                  outlined
                  dark
                  clearable
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import "../styles.css";

export default {
  name: "ContactPage",
  data() {
    return {
      name: "",
      email: "",
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
};
</script>

<style>
.CardContact {
  border: 1px solid white;
  border-radius: 24px;
  height: 60vh;
  width: 80%;
  text-align: center;
}
</style>