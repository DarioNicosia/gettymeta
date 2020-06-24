<template>
  <v-card max-width="700" flat class="px-2">
    <h1 class="text-h3 text-sm-h1 mt-5 mb-2 header indigo--text text--darken-3">gettymeta</h1>
    <slot name="subtitle"></slot>
    <slot name="input"></slot>
  </v-card>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  letter-spacing: 10px !important;
}
</style>
