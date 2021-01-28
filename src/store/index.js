import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    strict : true,
    state : {
        currentLocation : 'HaNoi',
        temp : 0,
        weather : '',
        humidity : '',
        wind_speed : '',
        listFocarestWeather : [],
    },

    getters : {
        getWeatherNow : (state) =>
        {
            return state;
        }
    },

    mutations : {
        setCurrentLocation : (state,location) => {
            state.currentLocation = location;
        },

        getWeatherForest : (state,response) => {
                state.temp = response.data.main.temp;
                state.weather = response.data.weather[0].main;
                state.humidity = response.data.main.humidity;
                state.wind_speed = response.data.wind.speed;
        },

        setListFocarest(state, respon){
            state.listFocarestWeather = respon;
        }
    },

    actions : {
        setCurrentLocation : ({commit},location) => {
            commit('setCurrentLocation',location);
        },

        getWeatherForest : ({commit,state}) => {

            const options = {
                method: "GET",
                url: "https://community-open-weather-map.p.rapidapi.com/weather",
                params: {
                  q: state.currentLocation,
                  units : "Metric"
                },
                headers: {
                  "x-rapidapi-key": "ef996be326msh2695ecbd44a5912p1feb45jsn43b041bede4b",
                  "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                },
              };
          
              axios
                .request(options)
                .then(response => {
                    commit('getWeatherForest',response);
                })
                .catch(function (error) {
                  alert(error);
                });
            
        },

        getWeatherDay : ({commit,state}) => {
            const options = {
                method: 'GET',
                url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
                params: {q: state.currentLocation, units : "Metric"},
                headers: {
                  'x-rapidapi-key': 'ef996be326msh2695ecbd44a5912p1feb45jsn43b041bede4b',
                  'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
                }
              };
              
              axios.request(options).then(function (response) {
                  commit('setListFocarest',response);
                  var utc = new Date().toJSON().slice(0,10);
                  const listFocarestInDay = response.data.list.filter(x => x.dt_txt.split(' ')[0] == utc);
                  listFocarestInDay.splice(0,1);
                  commit('setListFocarest',listFocarestInDay);
              }).catch(function (error) {
                  console.error(error);
              });
        }
    }
})