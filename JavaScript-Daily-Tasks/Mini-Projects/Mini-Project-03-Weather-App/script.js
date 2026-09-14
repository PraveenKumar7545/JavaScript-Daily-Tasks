async function getWeather() {

    let city = document.getElementById("cityInput").value;

    let loading = document.getElementById("loading");
    let error = document.getElementById("error");
    let weatherCard = document.getElementById("weatherCard");

    if (city === "") {

        error.innerText = "Please enter a city name";
        error.classList.remove("hidden");
        weatherCard.classList.add("hidden");

        return;
    }

    loading.classList.remove("hidden");
    error.classList.add("hidden");
    weatherCard.classList.add("hidden");

    try {

        let locationResponse = await fetch(
            "https://geocoding-api.open-meteo.com/v1/search?name=" +
            encodeURIComponent(city) +                                                                      
            "&count=1&language=en&format=json"
        );

        if (!locationResponse.ok) {
            throw new Error("Location not found");
        }

        let locationData = await locationResponse.json();

        if (!locationData.results) {
            throw new Error("City not found");
        }

        let location = locationData.results[0];

        let latitude = location.latitude;
        let longitude = location.longitude;

        let weatherResponse = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=" +
            latitude +
            "&longitude=" +
            longitude +
            "&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m"
        );

        if (!weatherResponse.ok) {
            throw new Error("Weather data not found");
        }

        let weatherData = await weatherResponse.json();

        let currentWeather = weatherData.current;

        document.getElementById("cityName").innerText =
            location.name;

        document.getElementById("temperature").innerText =
            currentWeather.temperature_2m + "°C";

        document.getElementById("humidity").innerText =
            currentWeather.relative_humidity_2m + "%";

        document.getElementById("windSpeed").innerText =
            currentWeather.wind_speed_10m + " km/h";

        document.getElementById("weatherCondition").innerText =
            getWeatherCondition(currentWeather.weather_code);

        weatherCard.classList.remove("hidden");

    } catch (error) {

        error = error;

        document.getElementById("error").innerText =
            "Unable to get weather. Please check the city name.";

        document.getElementById("error").classList.remove("hidden");

    } finally {

        loading.classList.add("hidden");
    }
}


function getWeatherCondition(code) {

    if (code === 0) {
        return "Clear Sky";
    }

    if (code === 1 || code === 2 || code === 3) {
        return "Partly Cloudy";
    }

    if (code === 45 || code === 48) {
        return "Fog";
    }

    if (code >= 51 && code <= 67) {
        return "Rain";
    }

    if (code >= 71 && code <= 77) {
        return "Snow";
    }

    if (code >= 80 && code <= 82) {
        return "Rain Showers";
    }

    if (code >= 95) {
        return "Thunderstorm";
    }       

    return "Unknown";
}