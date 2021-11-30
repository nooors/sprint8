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
    }
  },
  actions: {
    async getShips({ commit }) {
      const response = await axios.get(resourceApi);
      commit("setPageInfo", response.data);
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
    },
    loadLogin({ commit }) {
      if(Object.values(this.state.userInfo).filter((element) => element == null)
      .length > 0){
        alert(this.state.userInfo);
        commit("setUserInfo");
      }
      commit("setLoginOn");
      alert('se ha saltao el state')
    },
    loadUserInfo({ commit }) {
      commit("setUserInfo");
    },
    logOut({ commit }){
      commit("setLogOut");
    }
  },
  modules: {},
});
