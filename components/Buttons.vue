<template>
  <v-container>
    <div class="d-flex justify-space-around align-center">
      <client-only>
        <v-btn
          light
          class="indigo darken-3"
          @click="showCode"
          color="white--text"
        >
          generate code
          <v-icon right>mdi-code-tags</v-icon>
        </v-btn>
      </client-only>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    showCode: {
      type: Function
    },
    download: {
      type: Function
    }
  }
};
</script>
