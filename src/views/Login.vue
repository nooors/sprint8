<template>
  <div class="login">
    <div class="login__overflow"></div>
    <div class="login__card">
      <button @click="close" class="login__card__close" title="close">x</button>

      <div class="login__card__logo">
        <img src="../assets/Star_Wars_Yellow.png" alt="" />
      </div>
      <div class="login__card__title">sign in</div>
      <div class="error-login" :class="{ active: loginFail }">
        Incorrect credentials
      </div>

      <input
        :class="{ active: hasErrorEmail }"
        type="email"
        placeholder="Email"
        id="email"
        v-model="email"
        @blur="requiredEmail"
      />
      <div class="error" :class="{ active: hasErrorEmail }">Required</div>

      <input
        type="password"
        placeholder="Password"
        v-model="password"
        :class="{ active: hasErrorPassword }"
        @blur="requiredPassword"
      />
      <div class="error" :class="{ active: hasErrorPassword }">Required</div>
      <button class="login__card__button__signin" @click="validate">
        sign in
      </button>
      <button class="login__card__button__account" @click="toSignin">
        Create an Account
      </button>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  data: function () {
    return {
      email: null,
      password: null,
      hasErrorEmail: false,
      hasErrorPassword: false,
      loginFail: false,
    };
  },
  methods: {
    toSignin: function () {
      this.$router.push({ name: "Sign" });
    },
    validate: function () {
      if (this.isValid()) {
        if (
          localStorage.getItem("Email") == this.email &&
          localStorage.getItem("Password") == this.password
        ) {
          // save login in store state
          store.dispatch("loadLogin");
          // redirect to a save route
          this.$router.push({ name: "Starships" });
        } else {
          this.loginFail = true;
          setTimeout(() => (this.loginFail = false), 3000);
        }
        this.resetInfo();
      }
    },
    isValid: function () {
      if (!this.email) {
        this.hasErrorEmail = true;
      }
      if (!this.password) {
        this.hasErrorPassword = true;
      }
      if (!this.email || !this.password) {
        return false;
      }
      return true;
    },
    requiredEmail: function () {
      if (!this.email) {
        this.hasErrorEmail = true;
      } else {
        this.hasErrorEmail = false;
      }
    },
    requiredPassword: function () {
      if (!this.password) {
        this.hasErrorPassword = true;
      } else {
        this.hasErrorPassword = false;
      }
    },
    resetInfo: function () {
      this.email = null;
      this.password = null;
    },
    close: function () {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="sass" scoped>
.login
    display: flex
    justify-content: center
    align-items: center
    top: 30vh
    width: 100%

    .login__card
        width: 30vw
        background-color: hsl(0, 0%, 9%)
        box-shadow: 2px 2px 4px 2px black
        display: flex
        flex-flow: column wrap
        align-items: center
        @media only screen and (max-width: 1200px)
          width: 50vw

        .login__card__close
            align-self: flex-end
            font-size: 2rem
            margin: .75rem .75rem 0 0

        .login__card__logo
            padding-top: 1rem

        .login__card__title
            color: hsl(55, 100%, 46%)
            text-transform: uppercase
            font-size: 2rem
            padding-top: 2rem

        input
            width: 85%
            height: 2rem
            margin-bottom: 1rem
            border-radius: .25rem
            text-indent: 1rem

            &:focus-visible
                outline: 0
                border: 1px solid rgba(235, 215, 0)
                background-color: hsl(0, 0%, 35%)
                color: hsl(55, 100%, 46%)
                letter-spacing: 1px
            &.active
                outline: 0
                border: 2px solid red
                background-color: hsl(0, 0%, 35%)
                margin-bottom: .25rem



        .login__card__button__signin,
        .login__card__button__account
            width: 86%
            height: 2.2rem
            text-transform: capitalize
            border: 0
            border-radius: .25rem
            font-size: 1.25rem

            &:hover
                cursor: pointer

        .login__card__button__signin
            background-color: hsl(0, 0%, 35%)
            color: hsl(255, 0%, 90%)

            &:hover
                background-color: hsl(240, 45%, 48%)

        .login__card__button__account
            margin-top: 4rem
            margin-bottom: 2rem
            background-color: transparent
            color: hsl(55, 100%, 46%)
            border: 1px solid rgba(235, 215, 0, 0)
            transition: all 500ms

            &:hover
                border: 1px solid rgba(235, 215, 0, .5)
.error, .error-login
    display: none

.error.active, .error-login.active
    display: contents
    color: red
    position: absolute
    transform: translateY(-1rem)
    margin-bottom: .75rem

.error-login.active
    margin-bottom: .5rem

.login__card__close
  background-color: transparent
  border: none
  color: hsl(0, 0%, 35%)
  cursor: pointer
  transition: all 300ms
  &:hover
    color: white
    text-shadow: 0 0 5px rgb(255, 255, 255)
</style>
