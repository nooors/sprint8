<template>
  <div class="list" v-if="listInfo">
    <div class="list__items" v-for="(ship) in listInfo" :key="ship.name">
      <router-link
        class="ship"
        :to="{
          name: 'Starship',
          query: {
            name: ship.name,
          },
        }"
      >
      <the-summary-card 
      :name="ship.name"
      :model="ship.model"
      >
      </the-summary-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import TheSummaryCard from '@/components/TheSummaryCard'

export default {
  data: function() {
    return {
      id: null,
    }
  },
  components: {
    TheSummaryCard,
  },
  beforeCreate() {
    store.dispatch("getShips");
  },
  computed: {
    listInfo: function () {
      
      return store.state.infoShips;
    },
  },
  methods: {
    findImgId(value){
      let auxArray = this.listInfo[value].url.split("/");
      let idImg = auxArray[auxArray.length-2];
      let name = this.listInfo[value].name;
      store.dispatch ("getCurrentShipInfo", {
        idImg,
        name });
      this.id = idImg;
      return idImg;
    }
  }
};
</script>

<style lang="sass" scoped>
.list
  padding-bottom: 2rem
  padding-top: 20%
  margin: auto
  width: 80%
  @media(max-width: 1285px)
    padding-top: 25%
  @media(max-width: 1050px)
    padding-top: 30%
  @media(max-width: 850px)
    padding-top: 35%
  @media(max-width: 730px)
    padding-top: 40%

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
</style>
