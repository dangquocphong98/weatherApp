<template>
  <div class="row">
    <div class="col-1 col-sm-1 col-md-1">
      <i class="fa fa-map-marker" aria-hidden="true"></i>
    </div>
    <div class="col-11 col-sm-11 col-md-9">
      <select class="form-control" id="exampleFormControlSelect2" v-on:change="setCurrentLocation">
        <option value="HaNoi">Hà Nội</option>
        <option value="Bac Ninh">Bắc Ninh</option>
        <option value="DaNang">Đà Nẵng</option>
        <option value="Bac Giang">Bắc Giang</option>
        <option value="Ho Chi Minh">Hồ Chí Minh</option>
      </select>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      listCities: [],
    };
  },
  mounted() {
      this.$store.dispatch('setCurrentLocation','HaNoi');
      this.$store.dispatch('getWeatherForest');
      this.$store.dispatch('getWeatherDay');
  },
  methods: {
    setCurrentLocation(e){
        this.$store.dispatch('setCurrentLocation',e.target.value);
        this.$store.dispatch('getWeatherForest');
        this.$store.dispatch('getWeatherDay');
    }
  },
};
</script>

<style lang="css" scoped>
.fa {
  font-size: 35px;
  color: red;
}
</style>