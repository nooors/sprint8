<template>
  <div class="img-ship-container">
    <div class="img-ship-container__card">
      <div v-if="urlImage != undefined">
        <img :src="urlImage" :alt="info[0].name" />
      </div>
      <div v-else>
        <img :src="alternateImage" :alt="info[0].name" />
      </div>

      <div class="ship-content">
        <div class="ship-content__name">
          {{ info[0].name }}
        </div>
        <div class="ship-content__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          exercitationem a possimus tempore, repudiandae accusantium numquam?
          Aut, sunt, sapiente, rem ipsum saepe nihil dicta dolore ab repellendus
          perferendis ratione doloremque!
        </div>
        <div class="ship-content__features">
          <div class="ship-content__features__left">
            <div class="feature">Model: {{ info[0].model }}</div>
            <div class="feature">
              Cost in credits: {{ info[0].cost_in_credits }}
            </div>
            <div class="feature">
              Atmospheric speed: {{ info[0].max_atmosphering_speed }}
            </div>
          </div>
          <div class="ship-content__features__right">
            <div class="feature">Manufacturer: {{ info[0].manufacturer }}</div>
            <div class="feature">Length: {{ info[0].length }}</div>
            <div class="feature">Crew: {{ info[0].crew }}</div>
          </div>
        </div>
      </div>
    </div>
    <the-button @buttonClick="goBack">Go Back</the-button>
  </div>
</template>

<script>
import store from "@/store";
import TheButton from "@/components/TheButton.vue";

export default {
  components: {
    TheButton,
  },
  data: function () {
    return {
      baseUrl: "https://starwars-visualguide.com/assets/img/starships/",
      urlImage: null,
      alternateImage: "../assets/default_StarWars.jpg",
      info: null,
    };
  },
  created: function () {
    if (this.$route.query.name) {
      console.log(`hola ${this.$route.query.name}`);
      let result = store.getters.getShipsInfo.filter((obj) => {
        return obj.name == this.$route.query.name;
      });
      this.info = result;

      let auxArray = this.info[0].url.split("/");
      let idImg = auxArray[auxArray.length-2];

      this.urlImage = `${this.baseUrl + idImg}.jpg`
      return idImg;
    }
  },
  methods: {
    imgError(){
      return this.urlImage = "../assets/default_StarWars.jpg"
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.img-ship-container {
  margin: auto;
  width: 70%;
  padding-top: 15%;
  display: flex;
  justify-content: center;
}

.img-ship-container__card {
  background-color: black;
  width: 70%;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
}

.img-ship-container__card img {
  width: 100%;
  border-bottom: 2px solid red;
}

.ship-content__name {
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.75rem 0.75rem;
}

.ship-content__description {
  padding: 0 0.5rem;
}
.ship-content__features {
  display: flex;
  justify-content: space-between;
}
.ship-content__features__left,
.ship-content__features__right {
  padding: 0.75rem 0.5rem;
}

.feature {
  padding-bottom: 0.5rem;
}
</style>
