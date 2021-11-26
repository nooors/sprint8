import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

const resourceApi = "https://swapi.dev/api/starships";

export default new Vuex.Store({
  state: {
    allPageInfo: null,
  },
  getters: {
    getShipsInfo: (state) => {
      if(state.allPageInfo){
      return state.allPageInfo.results;
      }
    },
  },

  mutations: {
    setPageInfo(state, info) {
      state.allPageInfo = info;
    },
  },
  actions: {
    async getShips({ commit }) {
      const response = await axios.get(resourceApi);
      commit("setPageInfo", response.data);
    },
    getCurrentShipInfo({ commit }, idImg, name) {
      commit("setCurrentShipInfo", idImg, name);
    },
    async loadNextShips({ commit }) {
      console.log("Ha arribat a l'acció NEXT");
      if (this.state.allPageInfo.next) {
        const response = await axios.get(this.state.allPageInfo.next);
        commit("setPageInfo", response.data);
      }
    },
    async loadPreviousShips({ commit }) {
      if (this.state.allPageInfo.previous) {
        const response = await axios.get(this.state.allPageInfo.previous);
        commit("setPageInfo", response.data);
      }
    }
  },
  modules: {},
});
