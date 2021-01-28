<template>
    <div>
        <section>
           <div>
               <img src="../assets/Clouds.jpg"/>
           </div>
        </section>
        <section>
            <!-- <p>{{getWeatherNow.currentLocation}}</p> -->
            <p id="ContentWeather">{{getWeatherNow.weather}}</p>
            <div class="d-flex justify-content-between">
                <div class="info-detail">
                    <p class="title">Độ ẩm</p>
                    <span class="detail">{{getWeatherNow.humidity}}%</span>
                </div>
                <div class="info-detail">
                    <p class="title">Nhiệt độ</p>
                    <span class="detail">{{getWeatherNow.temp}}&deg;</span>
                </div>
                <div class="info-detail">
                    <p class="title">Gió</p>
                    <span class="detail">{{getWeatherNow.wind_speed}}</span>
                </div>
               
            </div>
        </section>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name :'bodyfocarest',
        data() {
            return {
                imageWeather : '/assets/Cloudy.jpg',
                isShowImg : false
            }
        },

      
        mounted() {
            
        },
        computed:{
            ...mapGetters(['getWeatherNow']),
            getImageForWeather()
            {
                if(this.getWeatherNow)
                {
                    if (this.getWeatherNow.weather == 'Clouds') {
                        return '../assets/Clouds.jpg';
                    }
                }

                return '';
            }
        },
        filters:{
            getImge(value)
            {
                 if(this.getWeatherNow)
                {
                    if (value == 'Clouds') {
                        return '../assets/Clouds.jpg';
                    }
                }

                return '';
            }
        }
    }
</script>

<style scoped>
#ContentWeather{
    margin:1.5rem 0;
    font-size: 3.5rem;
}

.info-detail{
    
}

.title{
    font-size: 1rem;
}

.detail{
    font-size: 2.7rem;
}
</style>

