<template>
  <div>
    <v-card max-width="500" flat class="mt-7 mb-4 pa-3 text-card">
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
      <h2
        class="text-h5 mb-2 mt-7 indigo--text text--darken-3"
      >What is and how to write the Meta Description</h2>
      <v-card class="my-6">
        <v-img src="/description.jpeg" alt="description tag example"></v-img>
      </v-card>
      <p
        class="text-h6 paragraph mt-3"
      >The challenge in Meta Description is to summarize, but effectively, the page: what it contains, what it is used for, why it is worth reading. Your ad on the SERP will have to attract the attention of the user, in order to transform it - with his click - into a visitor to your site. Typically, search engines show the Meta Description in the search results under the Tag Title</p>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "titleAndDescription"
};
</script>

<style scoped>
.text-card {
  animation: 1s appear cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s both;
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