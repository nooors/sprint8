<template>
  <div id="app">
    <div class="container">
      <the-header></the-header>
      <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="css">
html {
  border: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: DINNextW01-Regular, sans-serif;
  background-color: black;
  color: hsl(0, 0%, 52%);
  background-image: url("../src/assets/star-wars-backgroundsGreyjpg.jpg");
  background-size: contain;
}

.header {
  left: 0;
  top: 0;
  position: fixed;
  height: 20%;
  width: 100%;
  background-image: url("../src/assets/star-wars-backgroundsBlack.jpg");
  background-size: cover;
}

.header__content {
  position: relative;
  height: 100%;
}
.header__logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header__logo img {
  height: 80%;
}

.header__login {
  position: absolute;
  top: 50%;
  right: 5%;
}

a {
  text-decoration: none;
  color: rgb(134, 133, 133);
  transition: all 200ms;
}

a:hover {
  color: white;
  text-shadow: 0 0 5px rgb(255, 255, 255);
}

.nav {
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(134, 133, 133);
  border-top: 1px solid rgb(134, 133, 133);
}

.nav a:focus {
  border-bottom: 3px solid blue;
}

.nav a:last-child {
  border-right: 1px solid rgb(134, 133, 133);
}

.nav a {
  padding: 0.5rem 1rem;
  border-left: 1px solid rgb(134, 133, 133);
  position: relative;
}
</style>
