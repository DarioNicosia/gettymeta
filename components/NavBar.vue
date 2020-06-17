<template>
  <div>
    <v-app-bar flat app color="white">
      <v-spacer></v-spacer>
      <v-card class="d-flex align-center justify-center mt-3" flat>
        <v-img src="/logo_gettymeta.png" width="70" height="70" class="mt-1" contain></v-img>
        <v-divider class="ma-4" inset vertical></v-divider>
        <v-card-title class="align-center title text-capitalize">website meta tags checker</v-card-title>
      </v-card>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn color="indigo darken-3" small to="/generate" nuxt outlined class="mt-3">
        <v-icon left small>mdi-code-tags</v-icon>create meta tags
      </v-btn>
      <v-divider class="ma-4" inset vertical></v-divider>
      <v-btn icon class="mt-3">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon class="mt-3">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.title {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
