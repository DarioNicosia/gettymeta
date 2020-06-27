<template>
  <div>
    <v-card max-width="500" flat class="mt-7 mb-4 pa-3">
      <h2
        class="text-h4 mb-4 indigo--text text--darken-3"
      >Main meta tags recognized by google: title and description</h2>
      <v-divider class="mb-2"></v-divider>
      <p
        class="text-h6 paragraph"
      >In Meta Tags there are portions of code that have greater relevance than others: two, in particular, title and description, must be well done to perform their function properly. Both go to 'impact' on the SERP (Search Engine Results Page), that is the search engine results page and contain respectively the main label of the site and the information that induces the visitor to click.</p>
      <h3 class="text-h5 mb-2 mt-7 indigo--text text--darken-3">
        What it is and how to write the
        <strong>Tag Title</strong>
      </h3>
      <p
        class="text-h6 paragraph"
      >According to many, the "title" is the most important tag within a web page. Although technically it is not a meta tag but simply a "tag", the title is presented in this form:</p>
      <v-card class="my-6">
        <v-img src="/title_tag.jpeg" alt="title tag example"></v-img>
      </v-card>
      <p class="text-h6 paragraph mt-3">
        The title of the page must be placed inside the tag, and it is recommended to leverage the keywords of interest: the title comes out in the search engine results, providing quick information on the contents and helping the page to position itself in the results for that specific one theme.
        It is strongly recommended to have a unique title for each page, that the title is descriptive and concise and that there is no extreme forcing regarding keywords.
        The length must not exceed 55-60 characters.
        <br />To learn more, you can consult
        <a
          href="https://support.google.com/webmasters/answer/35624?rd=1"
          class="link indigo--text text--darken-3"
        >Google's instructions</a> on how to correctly implement a title tag.
      </p>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "titleAndDescription"
};
</script>

<style scoped>
.margin {
  margin-top: 160px !important;
}
</style>