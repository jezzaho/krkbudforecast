const iconkrk = document.getElementById('icon-krk');
const iconbud = document.getElementById('icon-bud');

const infokrk = document.getElementById('info-krk');
const infobud = document.getElementById('info-bud');
const tempkrk = document.getElementById('temp-krk');
const tempbud = document.getElementById('temp-bud');

document.addEventListener('DOMContentLoaded', function() {
    getWeatherData();
}, false);

function getWeatherData() {
    const lat_k = 50.0833;
    const lon_k = 19.9167;

    const lat_b = 47.498;
    const lon_b = 19.0399;
    
    

    getWeatherKrk(lat_k,lon_k)
    getWeatherBud(lat_b,lon_b)
    

}
function setWeatherbud(data) {
    const {icon} = data.weather[0]
    const temp = Math.round(data.main.temp * 10) / 10;
    const desc = data.weather[0].description;

    infobud.innerHTML = desc;
    tempbud.innerHTML = temp + ' °C';
    iconbud.innerHTML = `<img src="icons/${icon}.png" />`
 
}
function setWeatherkrk(data) {
    const {icon} = data.weather[0]
    const temp = Math.round(data.main.temp * 10) / 10;
    const desc = data.weather[0].description;

    infokrk.innerHTML = desc;
    tempkrk.innerHTML = temp + ' °C';
    iconkrk.innerHTML = `<img src="icons/${icon}.png" />`
 
}
function getWeatherKrk(lat,lon){
    const apik = `2ba74f22799278b87aa6462187dc3e7a`;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apik}&units=metric&lang=pl`).then(res => res.json().then(data =>
        setWeatherkrk(data)
    ))
}
function getWeatherBud(lat,lon){
    const apik = `2ba74f22799278b87aa6462187dc3e7a`;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apik}&units=metric&lang=pl`).then(res => res.json().then(data =>
        setWeatherbud(data)
    ))
}