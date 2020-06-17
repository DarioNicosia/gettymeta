<template>
  <div>
    <NavBar class="mb-4" />
    <v-divider></v-divider>
    <v-container class="d-flex justify-center align-center">
      <v-divider class="ma-4" inset vertical></v-divider>
      <div class="px-7 mt-4">
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
                outlined
                placeholder="www.gettymeta.com"
              ></v-text-field>
              <v-btn icon class="mt-n5">
                <v-icon size="75" color="indigo darken-3  ">mdi-arrow-right-bold-box</v-icon>
              </v-btn>
            </div>
          </slot>
        </Header>
      </div>
      <v-divider class="ma-4" inset vertical></v-divider>
    </v-container>
  </div>
</template>

<script>
import Header from "../components/Header";
import NavBar from "../components/NavBar";
export default {
  components: {
    NavBar,
    Header
  }
};
</script>

<style scoped>
.subtitle {
  letter-spacing: 0px !important;
  word-spacing: -1px !important;
}

v-text-field {
  background-color: aquamarine !important;
}
</style>
