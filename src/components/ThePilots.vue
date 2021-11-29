<template>
  <div>
    <div class="pilots">
      <div class="title">
        Related Pilots
      </div>
      <div v-if="pilotsInfo">
        <div v-for="pilot in pilotsInfo" :key="pilot.name">
          <div class="pilots__pilot__img">algo</div>
          <div class="pilots__pilot__name">algo</div>
        </div>
      </div>
      <div class="pilots__failed" v-else>
        There are no related items for this category
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  props: ["pilots"],
  created: function () {
    if (this.pilots) {
      store.dispatch("loadPilots", {pilots: this.pilots});
    }
  },
  computed: {
    pilotsInfo: function(){
      return store.getters.getPilotsInfo;
    }
  }
};
</script>

<style></style>
