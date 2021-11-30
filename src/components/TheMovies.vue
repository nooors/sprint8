<template>
    <div>
    <div class="pilots">
      <div class="title">
        Related Pilots
      </div>
      <div v-if="pilotsInfo">
        <div v-for="(pilot, index) in pilotsInfo" :key="pilot.name">
          <div class="pilots__pilot__img">
            <img :src="imgPilots[index]" alt="" />
          </div>
          <div class="pilots__pilot__name">{{ pilot.name }}</div>
        </div>
      </div>
      <div class="pilots__failed" v-else>
        There are no related items for this category
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["movies"],

}
</script>

<style>

</style>