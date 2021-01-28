<template>
    <div>
        <cbListCities />

        <bodyFocarest />

        <div class="footer">
            <weatherInDay />
        </div>
    </div>
</template>

<script>
import cbListCities from './CbListCities.vue';
import bodyFocarest from './BodyFocarest.vue';
import weatherInDay from './WeatherInDays.vue';

export default {
    components:{
        cbListCities,
        bodyFocarest,
        weatherInDay
    },
}
</script>

<style scoped>
   .footer{
       position: absolute;
       bottom: 0;
       left: 0;
       background-color: #5a1bee;
       border-top-right-radius: 20px;
       border-top-left-radius: 20px;
       width: 100vw;
       color: #fff;
       padding: 1rem;
       height: 30vh;
   }
</style>