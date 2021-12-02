<template>
  <div class="pilots-container">
    <div class="pilots">
      <div class="title">
        Related Pilots
      </div>
      <div v-if="pilotsInfo.length > 0" class="pilots-list">
        <div
          v-for="(pilot, index) in pilotsInfo"
          :key="pilot.name"
          class="pilots-list__item"
        >
          <div class="pilots__pilot__img">
            <img :src="imgPilots[index]" alt="" />
          </div>
          <div class="pilots__pilot__name">{{ pilot.name }}</div>
        </div>
      </div>
      <div v-else class="pilots__failed">
        There are no related items for this category
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
const urlBase = "https://starwars-visualguide.com/assets/img/characters/";

export default {
  name: "ThePilots",
  props: ["pilotsProp"],
  data: function () {
    return {
      pilotsInfo: [],
    };
  },
  // Getting the pilots list from starship info.
  created: function () {
    store.dispatch("loadPilots", { pilots: this.pilotsProp });
  },
  computed: {
    pilotsStore: function () {
      return store.state.pilots;
    },
    imgPilots: function () {
      if (this.pilotsInfo) {
        // Taking from the computed which take the info from the store
        let auxString;
        let idImgPilot;
        // Seraching in property url of every pilot the id for the url of the image
        let newArray = this.pilotsInfo.map((element) => {
          auxString = element.url.split("/");
          idImgPilot = auxString[auxString.length - 2];
          // building url with image
          return urlBase + idImgPilot + ".jpg";
        });

        return newArray;
      }
    },
  },
  watch: {
    // if store.pilots updates, get the info
    pilotsStore: function () {
      this.pilotsInfo = store.getters.getPilotsInfo;
    },
  },
};
</script>

<style lang="sass" scoped>

.pilots-container
  width: 45%

.pilots
  background-color: black
  display: flex
  flex-flow: column wrap
  padding: 1rem 0 0 1rem

  .title
    font-size: 1.5rem
    margin-bottom: 1rem

  .pilots-list
    margin-bottom: 1rem
    display: flex
    gap: .75rem

    .pilots-list__item
      display: flex
      flex-flow: column wrap
      align-items: center

.pilots__pilot__img
  width: 4rem
  height: 4rem
  border-radius: 50%
  overflow: hidden
  margin-bottom: .5rem

  img
    max-width: 100%
    height: auto
    object-fit: cover
    object-position: center center
</style>
