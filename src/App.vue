<template>
  <div id="app">
    <div class="container">
      <the-header></the-header>
      <div class="spacer"></div>
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
  box-sizing: unset;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  font-family: DINNextW01-Regular, sans-serif;
  background-color: black;
  color: hsl(0, 0%, 52%);
  background-image: url("../src/assets/star-wars-backgroundsGreyjpg.jpg");
  background-size: contain;
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

.spacer {
  position: relative;
  width: 100%;
  height: 27vh;
}
</style>
