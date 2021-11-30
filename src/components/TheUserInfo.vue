<template>
  <div>
    <div class="user__info">
      <div class="user__info__title">Welcome</div>
      <div class="user__info__name">{{ name }}</div>
      <div class="user__info__name">{{ surname }}</div>
      <div class="user__info__name">{{ displayName }}</div>
      <div class="user__info__name">{{ email }}</div>
      <div class="user__info__name__gap"></div>
      <button class="user__info__logout" @click="close">
        <img
          src="../assets/icons8-power-off-button-100.png"
          alt=""
          class="user__info__logout__img"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheUserInfo",
  props: ["name", "surname", "displayName", "email"],
  methods: {
    close: function () {
      this.$emit("click");
    },
  },
};
</script>

<style lang="sass" scoped>
.user__info
    background-color: rgb(23, 23, 23)
    width: 12rem
    display: flex
    flex-direction: column
    border-radius: 0 0 .5rem .5rem

    .user__info__title
        background-color: rgb(222, 206, 28)
        color: rgb(23, 23, 23)
        text-align: center
        font-size: 1.5rem
        padding: .5rem 0
        text-transform: uppercase
        font-weight: bold
        border-radius: 0 0 .5rem .5rem

    .user__info__name
        color: rgb(222, 206, 28)
        padding: 1rem 0 0 .5rem
        border-bottom: 1px solid rgba(222, 206, 28, .2)
        border-radius: 0 0 .5rem .5rem
        background-color: rgb(23, 23, 23)

    .user__info__name__gap
        margin-bottom: .5rem

    .user__info__logout
        background-color: rgb(222, 206, 28)
        border: none
        border-top: 1px solid rgba(23, 23, 23, .2)
        border-radius: 0 0 .5rem .5rem
        cursor: pointer
        width: 100%

        .user__info__logout__img
            width: 2rem
            padding: .25rem 0
</style>
