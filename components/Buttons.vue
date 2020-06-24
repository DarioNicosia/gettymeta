<template>
  <v-container>
    <div class="d-flex justify-space-around align-center">
      <v-btn
        light
        class="indigo darken-3"
        @click="showCode"
        color="white--text"
        :x-small="this.$vuetify.breakpoint.xsOnly"
      >
        generate code
        <v-icon right>mdi-code-tags</v-icon>
      </v-btn>
      <v-btn text color="indigo darken-3" :x-small="this.$vuetify.breakpoint.xsOnly">
        download pdf
        <v-icon right>mdi-download</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    showCode: {
      type: Function
    }
  }
};
</script>