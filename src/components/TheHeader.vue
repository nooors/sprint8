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

<style></style>
