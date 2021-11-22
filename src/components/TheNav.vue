<template>
  <nav>
    <div class="nav">
      <router-link :to="{ name: 'Home' }">HOME</router-link
      ><router-link :to="{ name: 'Starships' }">STARSHIPS</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
};
</script>

<style></style>
