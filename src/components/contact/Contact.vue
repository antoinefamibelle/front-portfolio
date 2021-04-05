<template>
  <div style="background-color: #111">
    <v-row
      v-if="!$vuetify.breakpoint.mobile"
      justify="center"
      align="center"
      class="center"
    >
      <v-col md="12">
        <h1 class="title text" style="text-align: center">
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
                v-model="name"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                class="myInput"
                style="margin: 20px"
                label="Votre Telephone"
                shaped
                outlined
                dark
                clearable
                v-model="phone"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col md="12">
              <v-text-field
                class="myInput"
                style="margin: 20px"
                label="Votre email"
                shaped
                outlined
                dark
                clearable
                v-model="email"
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
                v-model="subject"
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
                v-model="message"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <div>
            <v-btn
              style="margin-left: 20%; margin-right: 20%; margin-top: -15%"
              @click="sendMessage"
              >Envoyer votre message</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="12" md="12" xs="12">
        <h1 class="title" style="text-align: center">
          Alors ? Pret a faire connaissance ?
        </h1>
      </v-col>
      <v-col cols="12" sm="12" md="12" xs="12">
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12">
            <v-text-field
              class="myInput"
              style="margin: 20px"
              label="Votre nom"
              shaped
              outlined
              dark
              clearable
              v-model="name"
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="12">
            <v-text-field
              class="myInput"
              style="margin: 20px"
              label="Votre email"
              shaped
              outlined
              dark
              clearable
              v-model="email"
              :rules="[rules.required, rules.email]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="12">
            <v-text-field
              class="myInput"
              style="margin: 20px"
              label="Votre Telephone"
              shaped
              outlined
              dark
              clearable
              v-model="phone"
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="12">
            <v-text-field
              class="myInput"
              style="margin: 20px"
              label="Sujet de votre Email"
              shaped
              outlined
              dark
              clearable
              v-model="subject"
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="12">
            <v-text-field
              class="myInput"
              style="margin: 20px"
              label="Votre message"
              shaped
              outlined
              dark
              clearable
              v-model="message"
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-btn
            style="margin-left: 20%; margin-right: 20%"
            @click="sendMessage"
            >Envoyer votre message</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import "../styles.css";
import axios from "axios";

export default {
  name: "ContactPage",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    sendMessage: async function () {
      if (
        this.name &&
        this.email &&
        this.message &&
        this.subject &&
        this.phone
      ) {
        let message = `Nom : ${this.name} veut vous contacter au sujet de ${this.subject}. Voici le message qu'il/elle a laisser : ${this.message}. Voici ces coordonnes pour le/la rappeler ${this.phone} | ${this.email}`;
        var options = {
          method: "POST",
          url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
          headers: {
            "content-type": "application/json",
            "x-rapidapi-key":
              "a6b7852664mshf2387843233d904p17db2ejsne969c3fe51c6",
            "x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
          },
          data: {
            personalizations: [
              {
                to: [{ email: "antoinefamibelle@gmail.com" }],
                subject: "Nouveau Message depuis le site cv",
              },
            ],
            from: { email: "AntoineFamibelle-dev@message.com" },
            content: [{ type: "text/plain", value: message }],
          },
        };

        axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            console.log("Mail has been send");
            this.name = "";
            this.email = "";
            this.message = "";
            this.subject = "";
            this.phone = "";
          })
          .catch(function (err) {
            console.log(err);
          });
      } else {
        console.log("Quelqu'un a mal rempli le formulaire");
      }
    },
  },
};
</script>

<style>
.CardContact {
  border: 1px solid white;
  border-radius: 24px;
  height: 80%;
  width: 80%;
  text-align: center;
}
</style>