<template>
  <div max-width="700" flat class="px-2 header-card">
    <h1 class="text-h3 text-sm-h1 mt-5 mb-2 header indigo--text text--darken-3">
      gettymeta
    </h1>

    <slot name="subtitle"></slot>
    <slot name="input"></slot>
  </div>
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

@media screen and (max-width: 375px) {
  .header {
    letter-spacing: 6px !important;
  }
}

.header-card {
  animation: 1s appear cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
  margin: auto;
}

@keyframes appear {
  0% {
    visibility: hidden;
    opacity: 0;
    delay: 4s;
    transform: translateX(-40px);
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
}
</style>
