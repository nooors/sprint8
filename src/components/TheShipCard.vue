<template>
  <div class="img">
      <div class="img-ship">
        <!-- <img :src="imgUrl" :alt="name" onerror="this.src='../assets/default_StarWars.jpg';"/> -->
      </div>
  </div>
</template>

<script>
export default {
  name: "TheShipCard",
  props: [
    "name",
    ],
  computed: {
    imgUrl () {
      let aux = store.getters.getShipsInfo.filter(name => name.name);
      console.log(aux);
      return aux;
    }
  }
  

}
</script>

<style lang="sass" scoped>
.img-ship
  padding-top: 20%
  
  

</style>