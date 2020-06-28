<template>
  <div>
    <v-app-bar flat color="white" class="nav-animation">
      <client-only>
        <v-spacer v-if="this.$vuetify.breakpoint.smAndUp"></v-spacer>
      </client-only>
      <div class="d-flex align-center justify-center mt-3">
        <v-img
          src="/logo_gettymeta.png"
          width="70"
          @click="getLandingPage"
          height="70"
          class="mt-1 logo"
          contain
        ></v-img>
        <client-only>
          <v-divider v-if="this.$vuetify.breakpoint.smAndUp" class="ma-4" inset vertical></v-divider>
        </client-only>
        <h1 v-if="displayedMeta" class="align-center title">tags generator</h1>
        <h3 v-else class="align-center title">tags checker</h3>
      </div>
      <client-only>
        <v-spacer v-if="this.$vuetify.breakpoint.smAndUp"></v-spacer>
      </client-only>
      <v-spacer></v-spacer>

      <v-btn
        color="indigo darken-3"
        @click="createMetaPage"
        v-if="displayedMeta ===false"
        outlined
        :x-small="this.$vuetify.breakpoint.smAndDown"
        class="mt-3"
      >
        <v-icon left small>mdi-code-tags</v-icon>generate
      </v-btn>
      <v-btn
        color="indigo darken-3"
        @click="getLandingPage"
        v-if="displayedMeta"
        outlined
        class="mt-3"
        :x-small="this.$vuetify.breakpoint.smAndDown"
      >
        <v-icon left small>mdi-arrow-left</v-icon>back
      </v-btn>
      <client-only>
        <v-divider class="ma-4" v-if="this.$vuetify.breakpoint.smAndUp" inset vertical></v-divider>
      </client-only>
      <client-only>
        <v-spacer v-if="this.$vuetify.breakpoint.smAndUp"></v-spacer>
      </client-only>
    </v-app-bar>
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
