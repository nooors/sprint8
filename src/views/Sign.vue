<template>
  <div class="login">
    <div class="login__overflow"></div>
    <div class="login__card">
      <button @click="close" class="login__card__close" title="close">x</button>

      <div class="login__card__logo">
        <img src="../assets/Star_Wars_Yellow.png" alt="" />
      </div>
      <div class="login__card__title">Create your account</div>
      <input
        type="text"
        v-model="infoUser.firstName"
        name="firstName"
        placeholder="First Name"
        @blur="isEmpty('firstName')"
        :class="{ active: error.firstNameError }"
      />
      <div class="error" :class="{ active: error.firstNameError }">
        {{ messageFirstNameError }}
      </div>
      {{ error.firstName }}
      <input
        type="text"
        v-model="infoUser.lastName"
        placeholder="Last Name"
        @blur="isEmpty('lastName')"
        :class="{ active: error.lastNameError }"
      />
      <div class="error" :class="{ active: error.lastNameError }">
        {{ messageLastNameError }}
      </div>
      <input
        type="email"
        v-model="infoUser.email"
        placeholder="Email"
        @blur="isEmpty('email')"
        :class="{ active: error.emailError }"
      />
      <div class="error" :class="{ active: error.emailError }">
        {{ messageEmailError }}
      </div>
      <input
        type="text"
        v-model="infoUser.displayName"
        placeholder="Display Name"
        @blur="isEmpty('displayName')"
        :class="{ active: error.displayNameError }"
      />
      <div class="error" :class="{ active: error.displayNameError }">
        Required
      </div>
      <input
        type="password"
        v-model="infoUser.password"
        placeholder="Password (1 Capital, 1 number, min. 8 characters)"
        @blur="isEmpty('password')"
        :class="{ active: error.passwordError }"
      />
      <div class="error" :class="{ active: error.passwordError }">
        {{ messagePasswordError }}
      </div>
      <button
        class="login__card__button__signin"
        title="Sign in"
        @click="createAccount"
      >
        Create Account
      </button>
      <div
        class="login__card__account__succes"
        :class="{ active: accountSuccess }"
      >
        Your account has been successfully created
      </div>
      <span class="login__link">Already hav an account?</span>
      <router-link class="login__link__to" :to="{ name: 'Login' }"
        >Sign in</router-link
      >
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data: function () {
    return {
      error: {
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        displayNameError: false,
        passwordError: false,
      },
      infoUser: {
        firstName: null,
        lastName: null,
        email: null,
        displayName: null,
        password: null,
      },
      messageFirstNameError: null,
      messageLastNameError: null,
      messageEmailError: null,
      messagePasswordError: null,
      accountSuccess: false,
    };
  },

  // created: function () {
  //   console.log(this.error);
  //   console.log(this.error.firstNameError);
  // },

  methods: {
    close() {
      if (store.state.Loged) {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: "Home" });
      }
    },
    isEmpty(value) {
      switch (value) {
        case "firstName":
          const nameExp = /^[a-zA-Z\u00F1\u00D1]+$/i;
          if (
            !this.infoUser.firstName ||
            !nameExp.test(this.infoUser.firstName)
          ) {
            !this.infoUser.firstName
              ? (this.messageFirstNameError = "Required")
              : (this.messageFirstNameError = "Invalid First Name");
            this.error.firstNameError = true;
            return this.error.firstNameError;
          }
          return (this.error.firstNameError = false);
        case "lastName":
          const lastExp = /^[a-zA-Z\u00F1\u00D1]+$/i;
          if (
            !this.infoUser.lastName ||
            !lastExp.test(this.infoUser.lastName)
          ) {
            !this.infoUser.lastName
              ? (this.messageLastNameError = "Required")
              : (this.messageLastNameError = "Invalid Last Name");
            this.error.lastNameError = true;
            return this.error.lastNameError;
          }
          return (this.error.lastNameError = false);
        case "email":
          const emailExp = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if (!this.infoUser.email || !emailExp.test(this.infoUser.email)) {
            !this.infoUser.email
              ? (this.messageEmailError = "Required")
              : (this.messageEmailError = "Invalid Email");
            this.error.emailError = true;
            return this.error.emailError;
          }
          return (this.error.emailError = false);
        case "displayName":
          if (!this.infoUser.displayName) {
            this.error.displayNameError = true;
            return this.error.displayNameError;
          }
          return (this.error.displayNameError = false);
        case "password":
          const passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
          if (
            !this.infoUser.password ||
            !passExp.test(this.infoUser.password)
          ) {
            !this.infoUser.password
              ? (this.messagePasswordError = "reqired")
              : (this.messagePasswordError = "Invalid Format");
            this.error.passwordError = true;
            return this.error.passwordError;
          }
          return (this.error.passwordError = false);
      }
    },
    createAccount() {
      console.log("InfoUser");
      console.log(Object.values(this.infoUser));
      console.log(Object.values(this.error));
      console.log(Object.values(this.error).find((element) => element == true));
      if (
        Object.values(this.error).filter((element) => element == false)
          .length === 5
      ) {
        if (
          Object.values(this.infoUser).filter((element) => element == null)
            .length > 0
        ) {
          // no hay errores pero hay campos vacíos
          if (!this.infoUser.firstName) {
            this.error.firstNameError = true;
            this.messageFirstNameError = "Required";
          }
          if (!this.infoUser.lastName) {
            this.error.lastNameError = true;
            this.messageLastNameError = "Required";
          }
          if (!this.infoUser.email) {
            this.error.emailError = true;
            this.messageEmailError = "Required";
          }
          if (!this.infoUser.displayName) {
            this.error.displayNameError = true;
          }
          if (!this.infoUser.password) {
            this.error.passwordError = true;
            this.messagePasswordError = "Required";
          }
        } else {
          // have all de data, then we can save it
          localStorage.setItem("First Name", this.infoUser.firstName);
          localStorage.setItem("Last Name", this.infoUser.lastName);
          localStorage.setItem("Display Name", this.infoUser.displayName);
          localStorage.setItem("Email", this.infoUser.email);
          localStorage.setItem("Password", this.infoUser.password);
          this.resetFields();
          store.dispatch("loadUserInfo");
          //show info account succed
          this.accountSuccess = true;
          setTimeout(() => {
            this.accountSuccess = false;
            this.$router.push({ name: "Home" });
          }, 5000);
          //redirect to home
        }
      }
    },
    resetFields() {
      console.log("llega al reset");
      Object.keys(this.infoUser).forEach((key) => (this.infoUser[key] = null));
      console.log(this.infoUser);
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
            font-size: 1.75rem
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

.login__link
    margin-top: 1rem
    color: hsl(55, 100%, 46%)

.login__link__to
    color: hsl(55, 100%, 46%)
    margin-bottom: 1rem

    &:hover
        text-decoration: underline
        text-shadow: none

.error
    display: none

.error.active
    display: contents
    color: red
    position: absolute
    transform: translateY(-1rem)
    margin-bottom: .75rem

.login__card__close
  background-color: transparent
  border: none
  color: hsl(0, 0%, 35%)
  cursor: pointer
  transition: all 300ms
  &:hover
    color: white
    text-shadow: 0 0 5px rgb(255, 255, 255)

.login__card__account__succes
  display: none

.login__card__account__succes.active
  display: contents
  color: green
  font-size: 1.25rem
</style>
