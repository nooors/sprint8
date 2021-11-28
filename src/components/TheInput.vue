<template>
  <div class="input">
    <input :type="type" :placeholder="placeholder" :v-model="vmodel"/>
    
</template>

<script>
export default {
  name: "TheInput",
  props: ["type", "placeholder", "isActive", "vmodel"],
};
</script>

<style lang="sass" scoped>
input
    width: 100%
    height: 2rem
    margin-bottom: 1rem
    border-radius: .25rem

    &:focus-visible
        outline: 0
        border: 1px solid rgba(235, 215, 0)
        background-color: hsl(0, 0%, 35%)
</style>
