const apiKey = "287da4b7c94d3b3daacda64c6b07d0c9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon img");
const temperature = document.querySelector(".temperature");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".detail:nth-child(1) span");
const windSpeed = document.querySelector(".detail:nth-child(2) span");
const error = document.querySelector(".error");
const main = document.querySelector(".main");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        error.style.display = 'block';
        main.style.display = 'none';
    } else {
        const data = await response.json();
        console.log(data);

        cityName.innerHTML = data.name + ', ' + data.sys.country;
        temperature.innerHTML = Math.round(data.main.temp) + '°C';
        humidity.innerHTML = Math.round(data.main.humidity) + '%';
        windSpeed.innerHTML = Math.round(data.wind.speed) + ' km/h';

        // Weather condition image
        if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = './images/clouds.png';
        }
        else if (data.weather[0].main === 'Clear') {
            weatherIcon.src = './images/clear.png';
        }
        else if (data.weather[0].main === 'Rain') {
            weatherIcon.src = './images/rain.png';
        }
        else if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = './images/drizzle.png';
        }
        else if (data.weather[0].main === 'Mist') {
            weatherIcon.src = './images/mist.png';
        }

        error.style.display = 'none';
        main.style.display = 'block';
    }
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkWeather(searchInput.value);
    searchInput.value = '';
});
window.addEventListener('load', () => {
    checkWeather('Karachi');
});

