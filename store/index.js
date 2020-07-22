import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      displayedMeta: false
    },
    mutations: {
      SET_DISPLAYMETA(state, payload) {
        state.displayedMeta = payload;
      }
    },
    actions: {}
  });
};

export default createStore;
