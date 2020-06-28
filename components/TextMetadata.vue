<template>
  <div>
    <v-card max-width="500" flat class="mb-4 pa-3 text-card">
      <h2 class="text-h4 mb-4 indigo--text text--darken-3">Why check website meta tags is important?</h2>
      <v-divider class="mb-2"></v-divider>
      <p class="text-h6 paragraph">
        To build a website optimized for search engines and to increase its positioning in the list of results, some important technical rules must be observed: among these, there is the use of meta tags.
        SEO work includes the optimization of so-called "meta tags", that is metadata to be implemented internally in the HTML code which is interpreted by browsers and search engines and is used to provide additional and specific information.
      </p>
      <v-img src="/seo.jpg" alt="seo image "></v-img>
      <span class="mb-6">
        Photo by
        <a
          href="https://unsplash.com/@merakist?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >Merakist</a> on
        <a
          href="/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >Unsplash</a>
      </span>
      <p class="text-h6 paragraph mt-5">
        <strong>Meta tags</strong> are an excellent tool in the hands of webmasters and SEO: if used correctly they can give a significant boost to the indexing and positioning of the website.
        Each browser and each search engine may or may not be able to interpret a meta tag and has the right to give higher priority to one over the other: for more information on how each search engine interprets the meta tags, you can do reference to
        <a
          href="https://support.google.com/webmasters/answer/79812?hl=en"
          class="link indigo--text text--darken-3"
        >specific guidelines.</a>
      </p>
      <v-divider class="mb-2"></v-divider>
      <h2
        class="text-h4 mb-4 indigo--text text--darken-3"
      >Open Graph protocol: meta tags for social network</h2>

      <p class="text-h6 paragraph">
        Open Graph is a protocol that allows any web page to be transformed into valuable visual content. Basically, it allows you to indicate to social networks such as Facebook, Pinterest and LinkedIn what information to show when someone shares a link to your site.
        For this to happen you need to insert specific meta tags in the HTML source code that will make the elements you want to share recognizable to crawlers. In the absence of this meta-information, the crawlers will automatically detect what the relevant elements are and proceed to share them.
      </p>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "TextMetadata"
};
</script>

<style scoped>
.text-card {
  animation: 1s appear cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
}

@keyframes appear {
  0% {
    visibility: hidden;
    opacity: 0;
    delay: 4s;
    transform: translateX(40px);
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
}
</style>

