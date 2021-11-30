<template>
  <div class="button" @click="sendInfo">
      <button>
          <slot></slot>
      </button>
  </div>
</template>

<script>
export default {
    name: 'TheButton',
    methods: {
        sendInfo(){
            return this.$emit('buttonClick');
        },
    }

}
</script>

<style lang="sass" scoped>
button
  background-color: black
  color: hsl(0, 0%, 52%)
  padding: .75rem
  border: 0
  border-radius: .5rem
  cursor: pointer
  transition: all 200ms
  &:hover
    box-shadow: 1px 1px 5px 2px #444242
    color: white
    text-shadow: 0 0 5px rgb(255, 255, 255)
</style>