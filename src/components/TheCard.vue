<template>
  <div class="login__card">
    <router-link to="#" class="login__card__close" title="close">x</router-link>

    <div class="login__card__logo">
      <img src="../assets/Star_Wars_Yellow.png" alt="" />
    </div>
    <div class="login__card__title"><slot></slot></div>
    <input type="email" />
    <input type="password" />
    <button class="login__card__button__signin">sign in</button>
    <button class="login__card__button__account">Create an Account</button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
