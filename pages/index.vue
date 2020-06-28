<template>
  <div>
    <div v-if="rendered">
      <NavBar
        class="mb-4"
        v-bind:createMetaPage="createMetaPage"
        :displayedMeta="displayedMeta"
        :getLandingPage="getLandingPage"
      />
      <v-divider></v-divider>

      <v-container v-if="displayedMeta">
        <v-row justify="center">
          <v-divider class="ma-4" inset vertical></v-divider>
          <v-col cols="12" sm="4" class="column_metadata">
            <v-card flat>
              <v-card-title>Meta Tags</v-card-title>
              <v-card-subtitle class="mt-5 mb-n2">Social image url</v-card-subtitle>
              <v-responsive>
                <v-img :src="previewImage" class="uploading-image d-block" max-height="200" />
              </v-responsive>
              <div class="d-flex align-center">
                <v-text-field
                  @change="insertUrlImage"
                  dense
                  filled
                  color="indigo darken-3"
                  class="mt-3"
                  v-model="previewImage"
                  clear-icon
                ></v-text-field>
                <v-btn icon class="mt-n2" @click="clearImageUrl">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
              <v-card-subtitle class="mb-n2">Website / Host</v-card-subtitle>
              <v-textarea filled v-model="host" counter dense rows="1" color="indigo darken-3"></v-textarea>
              <v-card-subtitle class="mb-n2">Url Full Path</v-card-subtitle>
              <v-textarea
                filled
                v-model="urlFullPath"
                counter
                dense
                rows="1"
                color="indigo darken-3"
              ></v-textarea>
              <v-card-subtitle class="mb-n2">Title</v-card-subtitle>
              <v-textarea filled v-model="title" counter dense rows="2" color="indigo darken-3"></v-textarea>
              <v-card-subtitle class="mb-n2">Description</v-card-subtitle>
              <v-textarea
                filled
                v-model="description"
                counter
                dense
                rows="5"
                color="indigo darken-3"
              ></v-textarea>
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
          <v-col cols="12" sm="6" class="column_preview">
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
        <v-divider :class="{ footer_divider: !codeShowed }"></v-divider>
        <v-card flat outlined class="footer_divider mt-3" v-if="codeShowed">
          <v-card-title>
            <strong>{{ instructionCode }}</strong>
          </v-card-title>
          <Prism language="html">{{codeTotal}}</Prism>

          <v-btn
            v-clipboard:copy="codeTotal"
            v-clipboard:success="onCopy"
            color="indigo darken-3"
            class="pa-2 ma-2"
            outlined
          >
            copy
            <span>
              <v-icon right small>mdi-content-copy</v-icon>
            </span>
          </v-btn>
          <v-tooltip v-model="show" top>
            <template v-slot:activator="{ on, attrs }">
              <span icon v-bind="attrs" v-on="on"></span>
            </template>
            <span>Code Copied!</span>
          </v-tooltip>
        </v-card>
      </v-container>
      <div v-else>
        <v-container class="d-flex justify-center align-center">
          <v-divider class="mr-8 px-3 divider" inset vertical></v-divider>

          <div class="mt-4">
            <Header class="mt-4">
              <slot slot="subtitle">
                <h2 class="subtitle mb-4">check and extract meta tags from any website</h2>
              </slot>
              <slot slot="input">
                <v-card flat class="d-flex align-center justify-center">
                  <v-text-field
                    background-color="grey lighten-4"
                    class="mt-3"
                    color="indigo darken-3"
                    v-model="url"
                    outlined
                    full-width
                    :loading="loading"
                    placeholder="www.gettymeta.com"
                  ></v-text-field>
                  <v-btn icon class="mt-n5" @click="getMetatags">
                    <v-icon size="75" color="indigo darken-3  ">mdi-arrow-right-bold-box</v-icon>
                  </v-btn>
                </v-card>
                <div v-if="error" class="d-flex align-center justify-center">
                  <v-alert dense outlined transition="scale-transition" type="error">{{ errorText }}</v-alert>
                  <v-icon color="error" class="mt-n4 ml-1" @click="closeError">mdi-close-box</v-icon>
                </div>
                <div v-if="errorUrl" class="d-flex align-center justify-center">
                  <v-alert dense outlined transition="scale-transition" type="error">{{ noUrlText }}</v-alert>
                  <v-icon color="error" class="mt-n4 ml-1" @click="closeErrorUrl">mdi-close-box</v-icon>
                </div>
              </slot>
            </Header>
          </div>

          <v-divider class="ml-8 px-3 divider" inset vertical></v-divider>
        </v-container>
        <v-container
          class="footer_divider d-flex justify-center flex-column flex-md-row container_articles"
        >
          <TextMetadata class="mr-2" />
          <v-divider vertical></v-divider>
          <titleAndDescription class="ml-2" :class="{ margin: this.$vuetify.breakpoint.mdAndUp }" />
        </v-container>
      </div>
      <v-card flat height="130">
        <v-divider></v-divider>
        <v-footer absolute class="font-weight-medium" height="120" color="white">
          <v-col class="text-center" cols="12">
            <strong class="indigo--text text--darken-3">gettymeta | {{ new Date().getFullYear() }}</strong>
          </v-col>
        </v-footer>
      </v-card>
    </div>
    <div v-else>
      <div class="center-screen">
        <v-card flat>
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            indeterminate
            color="indigo darken-3"
          ></v-progress-circular>
          <v-card-title class="indigo--text text--darken-3">gettymeta</v-card-title>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import titleAndDescription from "../components/titleAndDescription";
import TextMetadata from "../components/TextMetadata";
import Prism from "vue-prism-component";
import Buttons from "../components/Buttons";
import DisplayMeta from "../components/DisplayMeta";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "prismjs";
import "prismjs/themes/prism.css";
export default {
  head() {
    return {
      title: "Gettymeta - Check and generate website meta tags",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Gettymeta is a free meta tags checker and generator. You can get html, twitter and facebook meta tags from any website or even generate meta tags for your website and see how they display on different social network "
        },
        {
          name: "twitter:title",
          content: "Gettymeta - Check and generate website meta tags"
        },
        {
          name: "twitter:description",
          content:
            "With Gettymeta you can easily check and get meta tags from any website. You can even generate for your website and see a preview of how they display on different social network"
        },
        { name: "twitter:image", content: "/gettymeta_img.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: this.$nuxt.$route.path },

        {
          name: "og:title",
          content: "Gettymeta - check and generate website meta tags"
        },
        {
          name: "og:description",
          content:
            "With Gettymeta you can easily check and get meta tags from any website. You can even generate for your website and see a preview of how they display on different social network"
        },
        { name: "og:image", content: "/gettymeta_img.png" },
        { name: "og:type", content: "website" },
        { name: "og:url", content: this.$nuxt.$route.path }
      ]
    };
  },

  components: {
    NavBar,
    Header,
    DisplayMeta,
    Buttons,
    Prism,
    TextMetadata,
    titleAndDescription
  },

  data() {
    return {
      show: false,
      overlay: false,
      codeShowed: false,
      errorUrl: false,
      error: false,
      loading: false,
      rendered: false,
      interval: {},

      errorText: "An error occurred! Please refresh the page and try again",
      noUrlText: "An error occurred! Please insert a valid url",
      instructionCode: "Your generated code",

      displayedMeta: false,
      overlay: false,
      url: "",
      previewImage: "/gettymeta_img.png",
      title: "Gettymeta - check and generate website meta tags",

      description:
        "Gettymeta is a free meta tags checker and generator. You can get html, twitter and facebook meta tags just inserting an URL or even generate meta tags for your website.",

      host: "www.gettymeta.com",
      pathname: "",
      charset: null,
      fbImg: "/gettymeta_img.png",
      facebookTitle: "Gettymeta - check and generate website meta tags",
      facebookDescription:
        "With Gettymeta you can easily check and get meta tags from any website. You can even generate your own meta tags for your website and see a preview of how they display on different social network",

      twitterTitle: "Gettymeta - check and generate website meta tags",
      twitterDescription:
        "With Gettymeta you can easily check and get meta tags from any website. You can even generate your own meta tags for your website and see a preview of how they display on different social network",

      twitterImg: "/gettymeta_img.png"
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
    urlFullPath() {
      return this.host + this.pathname;
    },

    codeTotal() {
      return (
        "<!-- HTML Meta Tags -->\n" +
        `<title>${this.title}</title>\n` +
        `<meta name="title" content="${this.title}"> \n` +
        `<meta name="description" content="${this.description}">\n` +
        "<!-- Open Graph / Facebook Meta Tags -->\n" +
        '<meta property="og:type" content="website">\n' +
        `<meta property="og:url" content="${this.urlFullPath}">\n` +
        `<meta property="og:title" content="${this.facebookTitle}">\n` +
        `<meta property="og:description" content="${this.facebookDescription}">\n` +
        `<meta property="og:image" content="${this.fbImg}">\n` +
        "<!-- Twitter Meta Tags -->\n" +
        `<meta property="twitter:title" content="${this.twitterTitle}">\n` +
        `<meta property="twitter:description" content="${this.twitterDescription}">\n` +
        `<meta property="twitter:image" content="${this.twitterImg}">\n` +
        `<meta property="twitter:card" content="summary_large_image">\n` +
        `<meta property="twitter:url" content="${this.urlFullPath}">\n`
      );
    }
  },
  methods: {
    getMetatags() {
      if (!this.url) {
        this.errorUrl = true;
      } else {
        try {
          const request = async () => {
            this.loading = true;
            let response = await fetch(
              "https://gettymeta-backend.herokuapp.com/api",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  url: this.url
                })
              }
            );
            return response.json();
          };
          request().then(response => {
            if (response.code) {
              this.errorUrl = true;
            } else if (response.statusCode) {
              this.error = true;
            } else {
              if (!response.title) {
                this.title = " ";
              } else {
                this.title = response.title;
              }
              if (!response.description) {
                this.description = " ";
              } else {
                this.description = response.description;
              }
              this.host = response.host;
              if (!response.pathname) {
                this.pathname = " ";
              } else {
                this.pathname = response.pathname;
              }
              if (!response.ogImage) {
                this.fbImg = "";
              } else {
                this.fbImg = response.ogImage;
              }
              if (!response.ogTitle) {
                this.facebookTitle = " ";
              } else {
                this.facebookTitle = response.ogTitle;
              }
              if (!response.ogDescription) {
                this.facebookDescription = " ";
              } else {
                this.facebookDescription = response.ogDescription;
              }

              if (!response.twitterTitle) {
                this.twitterTitle = " ";
              } else {
                this.twitterTitle = response.twitterTitle;
              }
              if (!response.twitterDescription) {
                this.twitterDescription = " ";
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
              this.url = " ";
              this.loading = false;
            }
          });
        } catch (error) {
          this.error = true;
          this.loading = false;
        }
      }
    },
    insertUrlImage() {
      this.fbImg = this.previewImage;
      this.twitterImg = this.previewImage;
    },
    createMetaPage() {
      this.displayedMeta = true;
    },
    getLandingPage() {
      this.displayedMeta = false;
    },
    showCode() {
      this.codeShowed = !this.codeShowed;
    },
    closeError() {
      this.error = false;
      this.url = "";
    },
    closeErrorUrl() {
      this.errorUrl = false;
      this.url = "";
    },
    clearImageUrl() {
      this.previewImage = " ";
      this.fbImg = " ";
      this.twitterImg = " ";
    },

    onCopy() {
      this.show = true;
      setTimeout(() => (this.show = false), 3000);
    }
  },
  created() {
    this.interval = setTimeout(() => (this.rendered = true), 3000);
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
.margin {
  margin-top: 160px !important;
}
.container_articles {
  margin-top: 80px !important;
}

.center-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 70vh;
}

.column_metadata {
  animation: 1s appear cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes appear {
  0% {
    visibility: hidden;
    opacity: 0;
    delay: 4s;
    transform: translateX(-40px);
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
}

.column_preview {
  animation: 1s appear cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
}
@keyframes appear {
  0% {
    visibility: hidden;
    opacity: 0;
    delay: 4s;
    transform: translateX(-10px);
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
}
</style>
