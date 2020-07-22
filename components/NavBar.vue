<template>
  <div class="nav-animation">
    <v-app-bar flat color="white" class="mb-3">
      <div class="d-flex align-center justify-center mt-3">
        <nuxt-link to="/">
          <v-img
            src="/logo_gettymeta1.jpg"
            width="50"
            height="50"
            class="mt-1 logo"
            contain
            @click="showCheckPage"
          ></v-img>
        </nuxt-link>

        <v-divider class="ml-3 mr-4 my-4" inset vertical></v-divider>

        <h3 class="align-center title">Gettymeta</h3>
      </div>

      <v-spacer></v-spacer>
      <!--
      <v-btn
        v-if="this.$route.name !== 'generate'"
        color="indigo darken-3"
        to="/generate"
        outlined
        small
        class="mt-3"
        >generate meta tags</v-btn
      >
      <v-btn
        v-if="this.$route.name !== 'index'"
        color="indigo darken-3"
        to="/"
        outlined
        small
        class="mt-3"
        >check meta tags</v-btn
      >-->
      <Dropdown class="mr-1" />
    </v-app-bar>
    <v-divider></v-divider>
  </div>
</template>

<script>
import Dropdown from "../components/Dropdown";
export default {
  components: {
    Dropdown
  },
  name: "NavBar",
  props: {
    createMetaPage: {
      type: Function
    },
    displayedMeta: {
      type: Boolean
    },
    getLandingPage: {
      type: Function
    }
  },
  methods: {
    showCheckPage() {
      this.$store.commit("SET_DISPLAYMETA", false);
    }
  }
};
</script>

<style scoped>
.title {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.logo {
  cursor: pointer;
}
.nav-animation {
  animation: 1s appear cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes appear {
  0% {
    visibility: hidden;
    opacity: 0;
    delay: 4s;
    transform: translateY(-40px);
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
}
</style>
