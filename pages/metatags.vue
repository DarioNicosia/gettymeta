<template>
  <div>
    <NavBar class="mb-4" />
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-divider class="ma-4" inset vertical></v-divider>
        <v-col cols="12" sm="4">
          <v-card flat>
            <v-card-title>Metadata</v-card-title>
            <v-card-subtitle class="mt-5 mb-n2">Social image</v-card-subtitle>
            <v-responsive>
              <v-img :src="previewImage" class="uploading-image d-block" />
            </v-responsive>
            <input
              type="file"
              id="myFile"
              name="myFile"
              accept="image/*"
              @change="uploadImage"
              class="input-file"
            />
            <div class="d-flex justify-center mt-2 mb-3">
              <v-btn small outlined color="indigo darken-3">
                <label for="myFile">Upload your Image</label>
                <v-icon small right color="indigo darken-3">mdi-upload</v-icon>
              </v-btn>
            </div>
            <v-card-subtitle class="mt-5 mb-n2">Website</v-card-subtitle>
            <v-textarea filled v-model="host" counter dense rows="1" color="indigo darken-3"></v-textarea>
            <v-card-subtitle class="mb-n2">Title</v-card-subtitle>
            <v-textarea filled v-model="title" counter dense rows="3" color="indigo darken-3"></v-textarea>
            <v-card-subtitle class="mb-n2">Description</v-card-subtitle>
            <v-textarea filled v-model="description" counter dense rows="6" color="indigo darken-3"></v-textarea>
            <v-divider class="mt-3"></v-divider>
            <v-card flat>
              <div class="d-flex align-center justify-start">
                <v-avatar width="30" height="30">
                  <img src="/opengraph_logo.png" alt="open graph logo" />
                </v-avatar>
                <v-card-title class="ml-n3">OpenGraph / Facebook</v-card-title>
              </div>

              <v-card-subtitle class="mb-n2">Facebook Title</v-card-subtitle>
              <v-textarea
                filled
                v-model="facebookTitle"
                counter
                dense
                rows="3"
                color="indigo darken-3"
              ></v-textarea>
              <v-card-subtitle class="mb-n2">Facebook Description</v-card-subtitle>
              <v-textarea
                filled
                v-model="facebookDescription"
                counter
                dense
                rows="6"
                color="indigo darken-3"
              ></v-textarea>
            </v-card>
          </v-card>
        </v-col>
        <v-divider class="ma-4" inset vertical></v-divider>
        <v-col cols="12" sm="7">
          <v-card flat>
            <v-card-title>Preview</v-card-title>
            <div class="d-flex align-center">
              <v-card-subtitle class="mt-2 mb-n2">Google</v-card-subtitle>
              <v-divider class="mt-4"></v-divider>
            </div>
            <v-card class="px-3 py-2" :flat="this.$vuetify.breakpoint.smAndUp">
              <p class="host">{{trimmedHost}}</p>
              <p class="font-title mt-n4">{{ trimmedTitle}}</p>
              <p class="font-description mt-n4">{{ trimmedDescription}}</p>
            </v-card>
            <div class="d-flex align-center">
              <v-card-subtitle class="mt-2 mb-n2">Twitter</v-card-subtitle>
              <v-divider class="mt-4"></v-divider>
            </div>
            <v-card max-width="500" flat outlined>
              <v-responsive aspect-ratio="2:1">
                <v-img :src="previewImage" max-width="600" max-height="300"></v-img>
              </v-responsive>
              <h3 class="twitter-title ml-2 mt-1 mr-1">{{ trimmedTitle}}</h3>
              <p class="twitter-description ml-2 mr-1">{{ trimmedDescription}}</p>
              <p class="ml-2 mt-n3 twitter-host mb-2">{{trimmedHost}}</p>
            </v-card>
            <div class="d-flex align-center">
              <v-card-subtitle class="mt-2 mb-n2">Facebook</v-card-subtitle>
              <v-divider class="mt-4"></v-divider>
            </div>
            <v-card max-width="500" flat outlined color="grey lighten-3">
              <v-responsive aspect-ratio="2:1">
                <v-img :src="previewImage" max-width="600" max-height="300"></v-img>
              </v-responsive>
              <p class="ml-2 mt-2 facebook-host">{{trimmedHost}}</p>
              <h3 class="facebook-title ml-2 mt-n4 mb-3">{{ trimmedFbTitle}}</h3>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  name: "metatags",
  components: {
    NavBar
  },
  data() {
    return {
      previewImage: "http://via.placeholder.com/640x360",
      title: "The Woodman set to work at once, and so sharp was",
      description:
        "The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through. hihihih",
      host: "www.repubblica.it",
      pathname:
        "/economia/2020/06/17/news/stati_generali_bonomi_gravi_ritardi_su_cassa_integrazione_e_sostegni_liquidita_-259466951/ ",
      charset: null,
      keywords: "",
      facebookImage: "",
      facebookTitle: "",
      facebookDescription: ""
    };
  },
  computed: {
    trimmedTitle() {
      let length = 65;
      return this.title.length > length
        ? this.title.substring(0, length - 3) + "..."
        : this.title;
    },
    trimmedDescription() {
      let length = 165;
      return this.description.length > length
        ? this.description.substring(0, length - 3) + "..."
        : this.description;
    },
    trimmedHost() {
      return this.host.replace("www.", " ");
    },
    trimmedPathName() {
      return this.pathname.replace("/", ">");
    },
    trimmedFbTitle() {
      let length = 90;
      return this.facebookTitle.length > length
        ? this.facebookTitle.substring(0, length - 3) + "..."
        : this.facebookTitle;
    },
    trimmedTwitterTitle() {
      let length = 60;
      return this.title.length > length
        ? this.title.substring(0, length - 3) + "..."
        : this.title;
    }
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    }
  }
};
</script>

<style scoped>
.input-file {
  display: none;
}
.font-title {
  font-family: Arial, Helvetica, sans-serif;
  color: #1b0fab;
  font-size: 18px;
}
.font-description {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}
.host {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}
.twitter-title {
  font-size: 15px;
  font-family: Helvetica, sans-serif;
}
.twitter-description {
  line-height: 1.3;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}
.twitter-host {
  font-family: Helvetica, sans-serif;
  color: #757575;
  font-size: 15px;
}
.facebook-host {
  font-family: Helvetica, sans-serif;
  color: #757575;
  font-size: 12px;
  text-transform: uppercase;
}
.facebook-title {
  font-size: 17px;
  font-family: Helvetica, sans-serif;
}
</style>
