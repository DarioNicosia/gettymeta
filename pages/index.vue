<template>
  <div>
    <NavBar
      class="mb-4"
      v-bind:createMetaPage="createMetaPage"
      :displayedMeta="displayedMeta"
      :getLandingPage="getLandingPage"
    />
    <v-divider></v-divider>
    <v-container v-if="displayedMeta">
      <v-row>
        <v-divider class="ma-4" inset vertical></v-divider>
        <v-col cols="12" sm="4">
          <v-card flat>
            <v-card-title>Meta Tags</v-card-title>
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
            <v-textarea filled v-model="title" counter dense rows="2" color="indigo darken-3"></v-textarea>
            <v-card-subtitle class="mb-n2">Description</v-card-subtitle>
            <v-textarea filled v-model="description" counter dense rows="5" color="indigo darken-3"></v-textarea>
            <v-divider class="mt-3"></v-divider>
            <v-card flat>
              <div class="d-flex align-center justify-start">
                <v-avatar width="30" height="30">
                  <img src="/opengraph_logo.png" alt="open graph logo" />
                </v-avatar>
                <v-card-title class="ml-n3">OpenGraph</v-card-title>
              </div>

              <v-card-subtitle class="mb-n2">OpenGraph Title</v-card-subtitle>
              <v-textarea
                filled
                v-model="facebookTitle"
                counter
                dense
                rows="2"
                color="indigo darken-3"
              ></v-textarea>
              <v-card-subtitle class="mb-n2">OpenGraph Description</v-card-subtitle>
              <v-textarea
                filled
                v-model="facebookDescription"
                counter
                dense
                rows="5"
                color="indigo darken-3"
              ></v-textarea>
            </v-card>
            <v-divider class="mt-3"></v-divider>
            <v-card flat>
              <div class="d-flex align-center justify-start">
                <v-avatar width="30" height="30">
                  <img src="/iconfinder_Twitter.png" alt="twitter logo" />
                </v-avatar>
                <v-card-title class="ml-n3">Twitter</v-card-title>
              </div>

              <v-card-subtitle class="mb-n2">Twitter Title</v-card-subtitle>
              <v-textarea
                filled
                v-model="twitterTitle"
                counter
                dense
                rows="2"
                color="indigo darken-3"
              ></v-textarea>
              <v-card-subtitle class="mb-n2">Twitter Description</v-card-subtitle>
              <v-textarea
                filled
                v-model="twitterDescription"
                counter
                dense
                rows="5"
                color="indigo darken-3"
              ></v-textarea>
            </v-card>
          </v-card>
        </v-col>
        <v-divider class="ma-4" inset vertical></v-divider>
        <v-col cols="12" sm="6">
          <v-card flat>
            <v-card-title>Preview</v-card-title>
            <div class="d-flex align-center">
              <v-avatar class="mb-n3 mr-n4" width="20" height="20">
                <img src="/google.png" alt="google logo" />
              </v-avatar>
              <v-card-subtitle class="mt-2 mb-n2">Google</v-card-subtitle>
              <v-divider class="mt-4"></v-divider>
            </div>
            <v-card class="px-3 py-2" :flat="this.$vuetify.breakpoint.smAndUp">
              <p class="host">{{ trimmedHost }}</p>
              <p class="font-title mt-n4">{{ trimmedTitle }}</p>
              <p class="font-description mt-n4">{{ trimmedDescription }}</p>
            </v-card>
            <div class="d-flex align-center">
              <v-avatar class="mb-n3 mr-n4" width="25" height="25">
                <img src="/iconfinder_Twitter.png" alt="twitter  logo" />
              </v-avatar>
              <v-card-subtitle class="mt-2 mb-n2">Twitter</v-card-subtitle>
              <v-divider class="mt-4"></v-divider>
            </div>
            <v-card max-width="500" flat outlined>
              <v-responsive aspect-ratio="2:1">
                <v-img :src="twitterImg" max-width="600" max-height="300"></v-img>
              </v-responsive>
              <h3 class="twitter-title ml-2 mt-1 mr-1">{{ trimmedTwitterTitle }}</h3>
              <p class="twitter-description ml-2 mr-1">{{ trimmedTwitterDescription }}</p>
              <p class="ml-2 mt-n3 twitter-host mb-2">{{ trimmedHost }}</p>
            </v-card>
            <div class="d-flex align-center mt-3">
              <v-avatar class="mb-n3 mr-n4" width="25" height="25">
                <img src="/facebook.png" alt="facebook logo" />
              </v-avatar>
              <v-card-subtitle class="mt-2 mb-n2">Facebook</v-card-subtitle>
              <v-divider class="mt-4"></v-divider>
            </div>
            <v-card max-width="500" flat outlined>
              <v-responsive aspect-ratio="2:1">
                <v-img :src="fbImg" max-width="600" max-height="300"></v-img>
              </v-responsive>
              <v-divider></v-divider>
              <div class="grey lighten-3 py-3">
                <p class="ml-2 facebook-host">{{ trimmedHost }}</p>
                <h3 class="facebook-title ml-2 mt-n4 mr-1">{{ trimmedFbTitle }}</h3>
              </div>
            </v-card>
            <div class="d-flex align-center mt-3">
              <v-avatar class="mb-n3 mr-n4" width="25" height="25">
                <img src="/linkedin.png" alt="linkedin logo" />
              </v-avatar>
              <v-card-subtitle class="mt-2 mb-n2">Linkedin</v-card-subtitle>
              <v-divider class="mt-4"></v-divider>
            </div>
            <v-card max-width="500" flat outlined>
              <v-responsive aspect-ratio="2:1">
                <v-img :src="fbImg" max-width="600" max-height="300"></v-img>
              </v-responsive>
              <v-divider></v-divider>
              <div class="grey lighten-3 py-3">
                <h3 class="facebook-title ml-2 mr-1">{{ trimmedFbTitle }}</h3>
                <p class="ml-2 linkedin-host mb-n1">{{ trimmedHost }}</p>
              </div>
            </v-card>
          </v-card>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <Buttons :showCode="showCode" />
      <v-divider :class="{footer_divider:!codeShowed  }"></v-divider>
      <v-card class="footer_divider" v-if="codeShowed">
        <v-card-title>{{instructionCode}}</v-card-title>
        <Prism language="html">
          {{htmlCommentTag}}
          {{codeTitle}}
          {{codeDescription}}
          {{facebookCommentTag}}
          {{openGraphType}}
          {{codeOgUrl}}
          {{codeOgTitle}}
          {{codeOgDescription}}
          {{codeOgImg}}
          {{twitterMetaTags}}
          {{codeTwitterCard}}
          {{codeTwitterUrl}}
          {{codeTwitterTitle}}
          {{codeTwitterDescription}}
          {{codeTwitterImage}}
        </Prism>
      </v-card>
    </v-container>

    <v-container v-else class="d-flex justify-center align-center">
      <v-divider class="mr-8" inset vertical v-if="this.$vuetify.breakpoint.smAndUp"></v-divider>
      <div class="mt-4">
        <Header class="mt-4">
          <slot slot="subtitle">
            <h2 class="subtitle mb-4">check and extract meta tags from any website</h2>
          </slot>
          <slot slot="input">
            <div class="d-flex align-center justify-center">
              <v-text-field
                background-color="grey lighten-4"
                class="mt-3"
                color="indigo darken-3"
                v-model="url"
                outlined
                placeholder="www.gettymeta.com"
              ></v-text-field>
              <v-btn icon class="mt-n5" @click="getMetatags">
                <v-icon size="75" color="indigo darken-3  ">mdi-arrow-right-bold-box</v-icon>
              </v-btn>
            </div>
          </slot>
        </Header>
      </div>
      <v-divider class="ml-8" inset vertical v-if="this.$vuetify.breakpoint.smAndUp"></v-divider>
    </v-container>
    <v-footer absolute>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import Prism from "vue-prism-component";
import Buttons from "../components/Buttons";
import DisplayMeta from "../components/DisplayMeta";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "prismjs";
import "prismjs/themes/prism.css";
export default {
  components: {
    NavBar,
    Header,
    DisplayMeta,
    Buttons,
    Prism
  },
  data() {
    return {
      overlay: false,
      codeShowed: false,
      instructionCode:
        "Copy the code and paste it into the <head> of your website",
      htmlCommentTag: "<!-- HTML Meta Tags -->",
      facebookCommentTag: "<!-- Open Graph / Facebook Meta Tags -->",
      openGraphType: '<meta property="og:type" content="website">',
      twitterMetaTags: "<!-- Twitter Meta Tags -->",
      displayedMeta: false,
      overlay: false,
      url: "",
      previewImage: "/gettymeta_img.jpeg",
      title: "Gettymeta - check and generate website meta tags",

      description:
        "With Gettymeta you can easily check and get meta tags from any website. You can even generate your own meta tags for your website and see a preview of how they display on different social network",
      host: "www.gettymeta.com",
      pathname:
        "/economia/2020/06/17/news/stati_generali_bonomi_gravi_ritardi_su_cassa_integrazione_e_sostegni_liquidita_-259466951/ ",
      charset: null,
      keywords: "",
      fbImg: "/gettymeta_img.jpeg",
      facebookTitle: "Gettymeta - check and generate website meta tags",
      facebookDescription:
        "With Gettymeta you can easily check and get meta tags from any website. You can even generate your own meta tags for your website and see a preview of how they display on different social network",

      twitterTitle: "Gettymeta - check and generate website meta tags",
      twitterDescription:
        "With Gettymeta you can easily check and get meta tags from any website. You can even generate your own meta tags for your website and see a preview of how they display on different social network",

      twitterImg: "/gettymeta_img.jpeg"
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
      return this.twitterTitle.length > length
        ? this.twitterTitle.substring(0, length - 3) + "..."
        : this.twitterTitle;
    },
    trimmedTwitterDescription() {
      let length = 150;
      return this.twitterDescription.length > length
        ? this.twitterDescription.substring(0, length - 3) + "..."
        : this.twitterDescription;
    },
    codeTitle() {
      return `<meta name="title" content="${this.title}">`;
    },
    codeDescription() {
      return `<meta name="description" content="${this.description}">`;
    },
    codeOgUrl() {
      return `<meta property="og:url" content="${this.host}">`;
    },
    codeOgTitle() {
      return `<meta property="og:title" content="${this.facebookTitle}">`;
    },
    codeOgDescription() {
      return `<meta property="og:description" content="${this.facebookDescription}">`;
    },
    codeOgImg() {
      return `<meta property="og:image" content="${this.fbImg}">`;
    },
    codeTwitterCard() {
      return `<meta property="twitter:card" content="summary_large_image">`;
    },
    codeTwitterUrl() {
      return `<meta property="twitter:url" content="${this.host}">`;
    },
    codeTwitterTitle() {
      return `<meta property="twitter:title" content="${this.twitterTitle}">`;
    },
    codeTwitterDescription() {
      return `<meta property="twitter:description" content="${this.twitterDescription}">`;
    },
    codeTwitterImage() {
      return `<meta property="twitter:image" content="${this.twitterImg}">`;
    }
  },
  methods: {
    getMetatags() {
      try {
        const request = async () => {
          let response = await fetch("http://localhost:4000/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              url: this.url
            })
          });
          return response.json();
        };
        request().then(response => {
          if (response.code) {
            console.log("please insert a valid url");
          } else {
            if (!response.title) {
              this.title = "This webpage has no title";
            } else {
              this.title = response.title;
            }
            if (!response.description) {
              this.description = " ";
            } else {
              this.description = response.description;
            }

            this.host = response.host;
            if (!response.ogImage) {
              this.fbImg = "";
            } else {
              this.fbImg = response.ogImage;
            }
            if (!response.ogTitle) {
              this.facebookTitle = "This webpage has no Open Graph title";
            } else {
              this.facebookTitle = response.ogTitle;
            }
            if (!response.ogDescription) {
              this.facebookDescription =
                " This webpage has no Open Graph description";
            } else {
              this.facebookDescription = response.ogDescription;
            }

            if (!response.twitterTitle) {
              this.twitterTitle = "this url has no twitter title";
            } else {
              this.twitterTitle = response.twitterTitle;
            }
            if (!response.twitterDescription) {
              this.twitterDescription = "this url has no twitter description";
            } else {
              this.twitterDescription = response.twitterDescription;
            }
            if (!response.twitterImage) {
              this.twitterImg = " ";
            } else {
              this.twitterImg = response.twitterImage;
            }
            this.previewImage = " ";
            this.displayedMeta = true;
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
        this.fbImg = this.previewImage;
        this.twitterImg = this.previewImage;
        console.log(this.previewImage);
      };
    },
    createMetaPage() {
      this.displayedMeta = true;
    },
    getLandingPage() {
      this.displayedMeta = false;
    },
    showCode() {
      this.codeShowed = !this.codeShowed;
    }
  }
};
</script>

<style scoped>
.subtitle {
  letter-spacing: 0px !important;
  word-spacing: -1px !important;
}

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
.linkedin-host {
  font-size: 14px;
  font-family: Helvetica, sans-serif;
}
.footer_divider {
  margin-bottom: 160px !important;
}
.footer {
  margin-top: 130px;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
</style>
