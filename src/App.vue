<template>
  <div id="app">
    <weatherMain />
  </div>
</template>

<script>
import weatherMain from "./components/WeatherMain.vue";
import {mapGetters} from 'vuex';

export default {
  name: "App",
  components: {
    weatherMain,
  },

  computed: {
    ...mapGetters(["getWeatherNow"]),
    getBackGroundByWeather() {
      if (this.getWeatherNow) {
        if (this.getWeatherNow.weather == "Clouds") {
          return "backgroudClouds";
        }
      }

      return "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  padding: 1rem;
  height: 100vh;
  background-image:linear-gradient(#edf3ff,#f7f9fe);
}

 .backgroudHot{
        background-color: #fecd88;
    }

  .backgroudClouds{
      background-color: #5bd6fd;
  }

  .backgroudClouds{
     background-color: #fff;
  }
</style>
