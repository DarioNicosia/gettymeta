<template>
  <v-card flat class="d-flex justify-space-between">
    <ShareNetwork
      network="facebook"
      url="https://gettymeta.com/"
      title="Gettymeta - Check and generate website meta tags"
      description="Gettymeta is a free meta tags checker and generator. You can get html, twitter and facebook meta tags from any website or even generate it for your website  "
      hashtags="metatags"
    >
      <v-icon size="30" color="indigo darken-3">mdi-facebook</v-icon>
    </ShareNetwork>
    <ShareNetwork
      network="email"
      url="https://gettymeta.com/"
      title="Gettymeta - Check and generate website meta tags"
      description="Gettymeta is a free meta tags checker and generator. You can get html, twitter and facebook meta tags from any website or even generate it for your website  "
    >
      <v-icon size="30" color="indigo darken-3">mdi-email</v-icon>
    </ShareNetwork>
    <ShareNetwork
      network="linkedin"
      url="https://gettymeta.com/"
      title="Gettymeta - Check and generate website meta tags"
    >
      <v-icon size="30" color="indigo darken-3">mdi-linkedin</v-icon>
    </ShareNetwork>
    <ShareNetwork
      network="reddit"
      url="https://gettymeta.com/"
      title="Gettymeta - Check and generate website meta tags"
    >
      <v-icon size="30" color="indigo darken-3">mdi-reddit</v-icon>
    </ShareNetwork>
    <ShareNetwork
      network="skype"
      url="https://gettymeta.com/"
      title="Gettymeta - Check and generate website meta tags"
      description="Gettymeta is a free meta tags checker and generator. You can get html, twitter and facebook meta tags from any website or even generate it for your website"
    >
      <v-icon size="30" color="indigo darken-3">mdi-skype</v-icon>
    </ShareNetwork>
    <ShareNetwork
      network="telegram"
      url="https://gettymeta.com/"
      title="Gettymeta - Check and generate website meta tags"
      description="Gettymeta is a free meta tags checker and generator. You can get html, twitter and facebook meta tags from any website or even generate it for your website"
    >
      <v-icon size="30" color="indigo darken-3">mdi-telegram</v-icon>
    </ShareNetwork>
    <ShareNetwork
      network="twitter"
      url="https://gettymeta.com/"
      title="Gettymeta - Check and generate website meta tags"
      hashtags="gettymeta,metatags,tagschecker,tagsgenerator"
      twitter-user="gettymeta"
    >
      <v-icon size="30" color="indigo darken-3">mdi-twitter</v-icon>
    </ShareNetwork>
  </v-card>
</template>

<script>
export default {
  name: "shareLink"
};
</script>
