<template>
  <div>
    <div class="films">
      <div class="title">
        Related films
      </div>
      <div v-if="filmsInfo">
        <div v-for="(film, index) in filmsInfo" :key="film.name">
          <div class="films__film__img">
            <img :src="imgFilms[index]" alt="" />
          </div>
          <div class="films__film__name">{{ film.name }}</div>
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

<style lang="sass" scoped></style>
