import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

const resourceApi = "https://swapi.dev/api/starships";

export default new Vuex.Store({
  state: {
    allPageInfo: null,
    isLoged: false,
    userInfo: {
      firstName: null,
      lastName: null,
      email: null,
      displayName: null,
      password: null

    },
    pilots: [],
  },
  getters: {
    getShipsInfo: (state) => {
      if(state.allPageInfo){
      return state.allPageInfo.results;
      }
    },
    getIsLoged: (state) => {
      return state.isLoged;
    },
    getUserInfo: (state) => {
      return state.userInfo;
    },
    getPilotsInfo: (state) => {
      return state.pilots;
    }
  },

  mutations: {
    setPageInfo(state, info) {
      state.allPageInfo = info;
    },
    setLoginOn(state){
      state.isLoged = true;
    },
    setUserInfo(state){
      console.log('mutaciones');
      state.userInfo.firstName = localStorage.getItem('First Name');
      state.userInfo.lastName = localStorage.getItem('Last Name');
      state.userInfo.displayName = localStorage.getItem('Display Name');
      state.userInfo.email = localStorage.getItem('Email');     
      state.userInfo.password = localStorage.getItem('Password');
    },
    setLogOut(state){
      state.isLoged = false;
    },
    setPilots(state, payload) {
      state.pilots.push(payload);
    },
    deletePilots(state){
      state.pilots = [];
    }
  },
  actions: {
    async getShips({ commit }) {
      const response = await axios.get(resourceApi);
      commit("setPageInfo", response.data);
    },
    async loadNextShips({ commit }) {
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
    },
    loadLogin({ commit }) {
      if(Object.values(this.state.userInfo).filter((element) => element == null)
      .length > 0){
        commit("setUserInfo");
      }
      commit("setLoginOn");
    },
    loadUserInfo({ commit }) {
      commit("setUserInfo");
    },
    logOut({ commit }){
      commit("setLogOut");
    },
    loadPilots({commit}, payload) {
      if(this.pilots){
        commit("deletePilots")
      }
      let pilots = Object.values(payload);
      if(pilots){
        pilots[0].forEach(async(pilot) => {
          console.log(pilot);
          const response = await axios.get(pilot);
          commit("setPilots", response.data);
        })
      }
    },
  }, 
  
  modules: {},
});
