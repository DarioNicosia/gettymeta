<template>
  <v-app>
    <v-main light>
      <nuxt />
    </v-main>
  </v-app>
</template>

<style>
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
