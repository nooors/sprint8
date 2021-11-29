<template>
  <div class="list" v-if="listInfo">
    <div class="overflow"></div>
    <div class="list__items" v-for="ship in listInfo" :key="ship.name">
      <router-link
        class="ship"
        :to="{
          name: 'Starship',
          query: {
            name: ship.name,
          },
          params: {
            name: ship.name
          }
        }"
      >
        <the-summary-card :name="ship.name" :model="ship.model">
        </the-summary-card>
      </router-link>
    </div>
    <div class="pagination-buttons">
      <div class="previous-if" v-if="$store.state.allPageInfo.previous">
      <the-button class="previous-view" @buttonClick="previousPage">Previous</the-button>
      </div>
      <the-button class="toHome" @buttonClick="toHome">Home</the-button>
      <div class="next-if" v-if="$store.state.allPageInfo.next">
        <the-button class="next-view" @buttonClick="nextPage">View more</the-button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import TheSummaryCard from "@/components/TheSummaryCard";
import TheButton from "@/components/TheButton";

export default {
  components: {
    TheSummaryCard,
    TheButton,
  },
  created() {
    if(!this.listInfo){
    store.dispatch("getShips");
    }
  },
  computed: {
    listInfo: function () {
      return store.getters.getShipsInfo;
    },
  },
  methods: {
    nextPage() {
      console.log(`stateNext: ${store.state.allPageInfo.next}`);
      if (store.state.allPageInfo.next) {
        console.log("crida a store");
        store.dispatch("loadNextShips");
      }
    },
    previousPage() {
      if (store.state.allPageInfo.previous){
        store.dispatch("loadPreviousShips");
      }
    },
    toHome() {
      return this.$router.push({name: 'Home'});
    }
  },
};
</script>

<style lang="sass" scoped>
.list
  padding-bottom: 2rem
  // padding-top: 20%
  position: absolute
  top: 25%
  left: 10%
  margin: auto
  width: 80%
  .list__items
    background-color: #000
    margin: 1rem
    border-radius: 0.5rem
    transition: all 200ms

    &:hover
      box-shadow: 1px 1px 5px 2px #444242

    .list__items__name, .list__items__model
      color: hsl(0, 0%, 52%)
      padding-left: 1.25rem
      padding-top: .75rem

    .list__items__name
      text-transform: uppercase

    .list__items__model
      padding-bottom: .75rem

.pagination-buttons
  display: flex
  justify-content: center
  gap: 2rem

.overflow 
  height: 20%
    
</style>
