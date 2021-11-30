<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <img src="../assets/Star_Wars.png" alt="" />
      </div>
      <the-login></the-login>
    </div>
    <the-nav></the-nav>
    
  </header>
</template>

<script>
import TheNav from "@/components/TheNav";
import TheLogin from "@/components/TheLogin";
export default {
  name: "TheHeader",
  components: {
    TheNav,
    TheLogin,
  },
};
</script>

<style lang="css" scoped>
.header {
  left: 0;
  top: 0;
  position: fixed;
  height: 20%;
  width: 100%;
  background-image: url("../../src/assets/star-wars-backgroundsBlack.jpg");
  background-size: cover;
  z-index: 1;
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

</style>
