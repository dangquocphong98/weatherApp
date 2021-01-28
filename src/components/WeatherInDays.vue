<template>
  <div>
    <p class="text-left title">Hôm nay</p>
    <div class="d-flex justify-content-between">
      <div
        class="weather-box"
        v-for="item in getWeatherNow.listFocarestWeather"
        :key="item.dt"
      >
        <p>{{ item.weather[0].main | translateWeather }}</p>
        <p class="time">{{ item.dt_txt | CutTimeInDateTime }}</p>
        <p class="temp">{{ item.main.temp }}&deg;</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import * as filter from "../filters/index.js";
export default {
  mounted() {},
  computed: {
    ...mapGetters(["getWeatherNow"]),
  },

  filters: {
    CutTimeInDateTime(value) {
      if (!value) return "";
      return value.split(" ")[1];
    },

    translateWeather(value) {
      // filter.translateWeather(value);
      if (!value) return "";
      if (value == "Clouds") return "Nhiều mây";
      if (value == "Rain") return "Mưa";
      if (value == "Mist") return "Sương mù";
      if (value == "Clear") return "Trời quang";
    },
  },
};
</script>

<style scoped>
  .title{
      font-weight: bold;
      /* font-size: 1.5rem; */
  }

 .weather-box {
    padding: .5rem;
    border-radius: 15px;
    background-color: #642ff3;
    border-color: transparent !important;
 }

 .time{
     font-size: 14px;
 }

 .temp{
     font-weight: bold;
     font-size: 16px;
 }
</style>
