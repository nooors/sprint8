<template>
  <section class="home-container">
    <div class="wrapper">
      <div class="title">
        <h1>STAR WARS</h1>
        <h2>Scrolling Text Effect</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad maiores aut
        cupiditate unde ipsam ut fugit deleniti non autem, ab, tempore ratione
        quo, nihil delectus sequi incidunt voluptates quis. Expedita!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad maiores aut
        cupiditate unde ipsam ut fugit deleniti non autem, ab, tempore ratione
        quo, nihil delectus sequi incidunt voluptates quis. Expedita!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad maiores aut
        cupiditate unde ipsam ut fugit deleniti non autem, ab, tempore ratione
        quo, nihil delectus sequi incidunt voluptates quis. Expedita!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad maiores aut
        cupiditate unde ipsam ut fugit deleniti non autem, ab, tempore ratione
        quo, nihil delectus sequi incidunt voluptates quis. Expedita!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad maiores aut
        cupiditate unde ipsam ut fugit deleniti non autem, ab, tempore ratione
        quo, nihil delectus sequi incidunt voluptates quis. Expedita!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="css" scoped>
.fade {
  position: relative;
  width: 100%;
  min-height: 60vh;
  top: -25px;
  background-image: linear-gradient(0deg, transparent, black 75%);
  z-index: 1;
}

.home-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  height: 800px;
  color: #feda4a;
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
}

.wrapper {
  position: relative;
  top: 9999px;
  transform-origin: 50% 100%;
  animation: wrapper 60s linear;
}

.wrapper > .title {
  font-size: 90%;
  text-align: center;
}

.wrapper > .title h1 {
  margin: 0 0 100px;
  text-transform: uppercase;
}

@keyframes wrapper {
  0% {
    top: 0;
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
}
</style>
