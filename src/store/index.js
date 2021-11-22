import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

const resourceApi = "https://swapi.dev/api/starships";

export default new Vuex.Store({
  state: {
    infoShips: null,
  },
  mutations: {
    setShips(state, ships) {
      state.infoShips = ships;
      console.log(state.infoShips);
    },
  },
  actions: {
    async getShips({ commit }) {
      const response = await axios.get(resourceApi);
      commit("setShips", response.data.results);
      console.log(response.data.results);
    },
  },
  modules: {},
});
