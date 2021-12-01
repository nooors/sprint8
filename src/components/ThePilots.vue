<template>
  <div>
    <div class="pilots">
      <div class="title">
        Related Pilots
      </div>
      <div v-if="pilotsInfo.length > 0">
        <div v-for="(pilot, index) in pilotsInfo" :key="pilot.name">
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
  props: ["pilotsProp"],
  data: function () {
    return {
      pilotsData: this.pilotsProp,
      pilotsInfo: [],
    };
  },
  // Getting the pilots list from starship info.
  created: function () {
    console.log(`Created ${this.pilotsProp}`);
    console.log(`Store ${store.state.pilots}`);
    if (this.pilotsProp) {
      console.log(">>>Dispactch");
      store.dispatch("loadPilots", { pilots: this.pilotsProp });
    }
  },
  computed: {
    //if pilots info is stored it recovers the info, an array of objects is  espected
    // setPilotsState: function () {
    //   if (this.pilots) {
    //     // alert('pilots are defined')
    //     // alert(this.pilots);
    //     store.dispatch("loadPilots", { pilots: this.pilots });
    //   }else{
    //     // alert('pilots unfefined vamos pal dispatch')
    //     store.dsipatch("clearPilots");
    //   }
    // },
    // pilotsInfo: function () {
    //   return store.getters.getPilotsInfo;
    // },
    testing: () => {
      this.pilotsData
        ? console.log(">>>DataCange")
        : console.log(">>>Nothig to say");
    },
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
    pilotsData(newValue, oldValue) {
      console.log("watchProps");
      console.log(newValue);
      console.log(this.pilotsData);
      if (this.pilotsData) {
        store.dispatch("loadPilots", { pilots: newValue });
      }
    },
    pilotsStore: function () {
      console.log("watcher Store");
      this.pilotsInfo = store.getters.getPilotsInfo;
    },
  },
};
</script>

<style lang="sass" scoped>
.pilots__pilot__img
  width: 3rem
  height: 3rem
  border-radius: 50%
  overflow: hidden
  background-color: blue
  img
    max-width: 100%
    max-height: 100%
    object-fit: cover
    object-position: center center
</style>
