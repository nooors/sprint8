<template>
  <div class="summary-card">
        <div class="list__items__name">
          {{ name }}
        </div>
        <div class="list__items__model">
          {{ model }}
        </div>
  </div>
</template>

<script>
export default {
    name: "TheSummaryCard",
    props: ['name', 'model']

}
</script>

<style lang="sass" scoped>
  .list__items__name, .list__items__model
    padding-left: 1rem

  .list__items__name
    padding-top: 1rem
    text-transform: uppercase
  .list__items__model
    padding-bottom: 1rem
    
</style>
