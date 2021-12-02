<template>
  <div class="films-container">
    <div class="films">
      <div class="title">
        Related films
      </div>
      <div v-if="filmsInfo" class="films-list">
        <div
          v-for="(film, index) in filmsInfo"
          :key="film.name"
          class="films-list__item"
        >
          <div class="films__film__img">
            <img :src="imgFilms[index]" alt="" />
          </div>
          <div class="films__film__name">{{ film.title }}</div>
        </div>
      </div>
      <div class="films__failed" v-else>
        There are no related items for this category
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
const urlBase = "https://starwars-visualguide.com/assets/img/films/";
export default {
  name: "TheFilms",
  props: ["filmsProp"],
  data: function () {
    return {
      filmsInfo: [],
    };
  },
  // Getting the films list from starship info.
  created: function () {
    store.dispatch("loadFilms", { films: this.filmsProp });
  },
  computed: {
    filmsStore: function () {
      return store.state.films;
    },
    imgFilms: function () {
      if (this.filmsInfo) {
        // Taking from the computed which take the info from the store
        let auxString;
        let idImgPilot;
        // Seraching in property url of every pilot the id for the url of the image
        let newArray = this.filmsInfo.map((element) => {
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
    // if store.films updates, get the info
    filmsStore: function () {
      console.log("watcher Store");
      this.filmsInfo = store.getters.getFilmsInfo;
    },
  },
};
</script>

<style lang="sass" scoped>
.films-container
  width: 55%

.films
  background-color: black
  display: flex
  flex-flow: column wrap
  padding: 1rem 0 0 1rem

  .title
    font-size: 1.5rem
    margin-bottom: 1rem

  .films-list
    margin-bottom: 1rem
    display: flex
    gap: .75rem


    .films-list__item
      display: flex
      flex-flow: column wrap
      align-items: center

.films__film__img
  width: 4rem
  height: 4rem
  border-radius: 50%
  overflow: hidden
  margin-bottom: .5rem

  img
    max-width: 100%
    height:  auto
    object-fit: cover
    object-position: center center
</style>
