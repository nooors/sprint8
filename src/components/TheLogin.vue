<template>
  <div class="header__login">
    <div v-if="!$store.getters.getIsLoged">
      <router-link to="/Login">LOGIN IN</router-link> //
      <router-link to="/Sign">SING UP</router-link>
    </div>
    <div v-else class="user">
      <button class="user-button" @click="tooggleClass">
        <img src="../assets/clone1_87097.png" alt="welcome" class="user__img" />
      </button>
      <the-user-info
        @click="logOut"
        class="user-info"
        :class="{ active: isActive }"
        :name="$store.getters.getUserInfo.firstName"
        :surname="$store.getters.getUserInfo.lastName"
        :displayName="$store.getters.getUserInfo.displayName"
        :email="$store.getters.getUserInfo.email"
      />
      <div class="user__info"></div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import TheUserInfo from "./TheUserInfo.vue";

export default {
  name: "TheLogin",
  components: {
    TheUserInfo,
  },
  data: function () {
    return {
      isActive: false,
    };
  },
  methods: {
    tooggleClass() {
      this.isActive = !this.isActive;
    },
    logOut() {
      store.dispatch("logOut");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.header__login {
  position: absolute;
  top: 50%;
  right: 5%;
}

.user {
  display: flex;
  flex-flow: column;
}
button.user-button {
  align-self: flex-end;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.user__img {
  width: 50px;
}

.user-info {
  display: none;
}
.user-info.active {
  display: initial;
}
</style>
