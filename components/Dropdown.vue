<template>
  <div>
    <v-btn icon v-on:click="dropdownIsActive = !dropdownIsActive" class="mt-3">
      <v-icon color="indigo darken-3">mdi-menu</v-icon>
    </v-btn>
    <transition name="slide-fade">
      <ul v-on-clickaway="away" v-if="dropdownIsActive" class="container-menu">
        <li class="menu-item">
          <v-btn text v-if="$store.state.displayedMeta === false" @click="showMeta">generate tag</v-btn>
          <v-btn text v-if="$store.state.displayedMeta " @click="showCheckPage">check tag</v-btn>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  mixins: [clickaway],
  data() {
    return {
      dropdownIsActive: false
    };
  },
  computed: {
    displayedMeta() {
      return this.$store.state.displayedMeta;
    }
  },
  methods: {
    away() {
      this.dropdownIsActive = false;
    },
    showMeta() {
      this.$store.commit("SET_DISPLAYMETA", true);
    },
    showCheckPage() {
      this.$store.commit("SET_DISPLAYMETA", false);
    }
  }
};
</script>

<style lang="css" scoped>
.dropdown-container {
  width: 120px;
  margin-right: 30px;
}

.container-menu {
  position: fixed;
  z-index: 100;
  padding: 5px;
  margin-left: -130px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: white;
  border: 2px solid #283593;
}
.menu-item {
  margin: 7px;
  list-style-type: none;
  color: #2c3e50;
  font-weight: bold;
  cursor: pointer;
  background-color: white;
  z-index: 100;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter {
  transform: translateY(-20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
