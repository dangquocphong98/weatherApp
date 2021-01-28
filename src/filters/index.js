export function translateWeather(value){
    if(!value) return '';
    if(value == 'Clouds') return 'Nhiều mây';
    if(value == 'Rain') return 'Mưa';
    if(value == 'Mist') return 'Sương mù';
}