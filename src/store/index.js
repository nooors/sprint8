import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

const resourceApi = "https://swapi.dev/api/starships";
const resourceImg = "https://starwars-visualguide.com/assets/img/starships/5.jpg";

export default new Vuex.Store({
  state: {
    infoShips: null,
    allPageInfo: null,
    currentImg: null,
    currentName: null,
  },
  getters: {
    getShipsInfo: (state) => {
      return state.allPageInfo.results;
    }
  },

  mutations: {
    setShips(state, ships) {
      state.infoShips = ships;
      console.log(`strore${state.infoShips}`);
    },
    setPageInfo(state, info) {
      state.allPageInfo = info;
      console.log(state.allPageInfo);
      console.info(state.allPageInfo.results)
      console.log(state.allPageInfo.count)
    },
    setCurrentShipInfo (state, id, name) {
      state.currentImg = id;
      state.currentName = name;
    }
  },
  actions: {
    async getShips({ commit }) {
      const response = await axios.get(resourceApi);
      commit("setShips", response.data.results);
      commit("setPageInfo", response.data);
      
    },
    getCurrentShipInfo({ commit }, idImg, name) {
      commit("setCurrentShipInfo", idImg, name);
    },
    
  },
  modules: {},
});
