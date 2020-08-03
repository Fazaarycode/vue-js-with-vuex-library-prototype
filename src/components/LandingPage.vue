<template>
  <div class="parent">
    <div class="bg-image">  </div>
    <div class="welcome">
      <h1>Welcome back! What do you want to do today?</h1>
    </div>
    <div
      class="options"
      @mouseenter="blurBackground"
      @mouseleave="unBlurBackground"
    >
      <Actions />
    </div>
    </div>

</template>

<script>
import Actions from "./Actions";
export default {
  name: "LandingPage",
  components: {
    Actions,
  },
  methods: {
    blurBackground() {
      let parent = document.querySelector(".bg-image");
      parent.style.filter = "blur(3px)";
      let options = document.querySelector(".options");
      options.style.filter = "blur(0px)";
    },
    unBlurBackground() {
      let parent = document.querySelector(".bg-image");
      parent.style.filter = "none";
      let options = document.querySelector(".options");
      options.style.filter = "none";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.parent {
  .bg-image {
  background-image: url("../assets/bg-main-intro.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
}

  .welcome {
    display: inline-flex;
    justify-content: center;
    width:100vw;
    height:50px;
    text-align: center;
    align-items: center;
    position: absolute;
    top: 20px;
    color: wheat;
  }
  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 50vh;
    margin-left: 25%;
    top: 80px;
    border: 10px solid brown;
    position: absolute;
    -webkit-box-shadow: 6px 4px 19px 17px rgba(0,0,0,0.58);
    -moz-box-shadow: 6px 4px 19px 17px rgba(0,0,0,0.58);
    box-shadow: 6px 4px 19px 17px rgba(0,0,0,0.58);
  }
}

</style>
