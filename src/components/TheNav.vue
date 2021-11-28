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

<style lang="css" scoped>
.nav {
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(56, 56, 56);
  border-top: 1px solid rgb(56, 56, 56);
}
.nav a:hover{
  cursor: pointer
}
.nav a:focus {
  border-bottom: 3px solid blue;
}

.nav a:last-child {
  border-right: 1px solid rgb(56, 56, 56);
}

.nav a {
  padding: 0.5rem 1rem;
  border-left: 1px solid rgb(56, 56, 56);
  position: relative;
  
}
</style>
