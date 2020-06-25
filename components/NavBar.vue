<template>
  <div>
    <client-only>
      <v-app-bar flat color="white">
        <v-spacer v-if="this.$vuetify.breakpoint.smAndUp"></v-spacer>
        <div class="d-flex align-center justify-center mt-3">
          <v-img
            src="/logo_gettymeta.png"
            width="70"
            @click="getLandingPage"
            height="70"
            class="mt-1 logo"
            contain
          ></v-img>

          <v-divider v-if="this.$vuetify.breakpoint.smAndUp" class="ma-4" inset vertical></v-divider>
          <h3 class="align-center title">gettymeta</h3>
        </div>
        <v-spacer v-if="this.$vuetify.breakpoint.smAndUp"></v-spacer>
        <v-spacer></v-spacer>

        <v-btn
          color="indigo darken-3"
          @click="createMetaPage"
          v-if="displayedMeta ===false"
          outlined
          small
          class="mt-3"
        >
          <v-icon left small>mdi-code-tags</v-icon>create
        </v-btn>
        <v-btn
          color="indigo darken-3"
          small
          @click="getLandingPage"
          v-if="displayedMeta"
          outlined
          class="mt-3"
        >
          <v-icon left small>mdi-arrow-left</v-icon>back
        </v-btn>
        <v-divider class="ma-4" v-if="this.$vuetify.breakpoint.smAndUp" inset vertical></v-divider>

        <v-spacer v-if="this.$vuetify.breakpoint.smAndUp"></v-spacer>
      </v-app-bar>
    </client-only>
  </div>
</template>

<script>
export default {
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
</style>
