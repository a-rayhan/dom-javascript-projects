// const apiKey = '02aa8e6435cb2fb610de1376e5469294';
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const weatherCard = document.querySelector('.weather');

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`)
    const data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = parseInt(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    if (data.weather[0].main == "Cloud") {
        weatherIcon.src = "img/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "img/mist.png";
    }

    weatherCard.style.display = 'block';
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})

