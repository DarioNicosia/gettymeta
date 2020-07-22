<template>
  <v-app>
    <v-main light>
      <NavBar class="navbar" />

      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  components: {
    NavBar
  }
};
</script>

<style>
.navbar {
  position: sticky;
  z-index: 1;
}
.paragraph {
  line-height: 200% !important;
}
.link {
  text-decoration: none;
}
@media screen and (max-width: 960px) {
  .divider {
    display: none !important;
  }
}
@media screen and (max-width: 960px) {
  .text-card {
    max-width: 100% !important;
  }
}
</style>
