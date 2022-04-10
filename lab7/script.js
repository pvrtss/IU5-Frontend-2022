function loadCurrentWeather(data) {
    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("temp").innerHTML =
        (Math.round(data.main.temp) >= 0 ? "+" + Math.round(data.main.temp) : Math.round(data.main.temp)) +
        "<sup>o</sup>";
    document.getElementById("feels-like").innerHTML =
        (Math.round(data.main.feels_like) >= 0
            ? "+" + Math.round(data.main.feels_like)
            : Math.round(data.main.feels_like)) + "<sup>o</sup>";
    document.getElementById("weather-icon").innerHTML =
        '<img class = "weather-img" src=http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png alt="">';
    document.getElementById("desc-text").innerHTML =
        data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);
    document.getElementById("wind").innerHTML = Math.round(data.wind.speed) + " м/с";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("pressure").innerHTML = Math.round(data.main.pressure / 1.33) + " мм рт. ст.";
}

function loadHourForecast(data) {
    const casts = document.getElementsByClassName("cast");
    let i = 0;
    for (let cast of casts) {
        cast.getElementsByClassName("cast-time")[0].innerHTML = data.list[i].dt_txt.slice(-8, -3);
        cast.getElementsByClassName("cast-main")[0].innerHTML =
            (Math.round(data.list[i].main.temp) >= 0
                ? "+" + Math.round(data.list[i].main.temp)
                : Math.round(data.list[i].main.temp)) + "<sup>o</sup>";
        cast.getElementsByClassName("cast-temp-icon")[0].innerHTML =
            '<img class="cast-img" src=http://openweathermap.org/img/wn/' +
            data.list[i].weather[0].icon +
            '@2x.png alt="">';
        cast.getElementsByClassName("cast-desc")[0].innerHTML =
            data.list[i].weather[0].description[0].toUpperCase() + data.list[i].weather[0].description.slice(1);
        i++;
    }
}

function main() {
    let errorBox = document.getElementById("error-box");
    let errorMsg = document.getElementById("error-text");
    let input = document.getElementById("search_input");
    let city = input.value === "" ? "Москва" : encodeURIComponent(input.value);
    let api_key = "32273e1edabe3f7e12571409dbace3cf";
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=ru&units=metric&appid=" + api_key;
    let urlForecast =
        "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&lang=ru&units=metric&appid=" + api_key;

    fetch(url)
        .then(response => response.json(), (error) => {
            errorMsg.innerHTML = "<b>Ошибка!</b>" + error;
            if (!errorBox.classList.contains("error-box-visible")) {
                errorBox.classList.toggle("error-box-visible");
                errorBox.classList.toggle("error-box-hidden");
            }
        })
        .then((result) => {
            if (result.cod === "404") {
                errorMsg.innerHTML = "<b>Ошибка!</b>Город не найден. Попробуйте еще раз.";
                if (!errorBox.classList.contains("error-box-visible")) {
                    errorBox.classList.toggle("error-box-visible");
                    errorBox.classList.toggle("error-box-hidden");
                }
            } else {
                if (errorBox.classList.contains("error-box-visible")) {
                    errorBox.classList.toggle("error-box-visible");
                    errorBox.classList.toggle("error-box-hidden");
                }

                loadCurrentWeather(result);
                fetch(urlForecast)
                    .then((response) => response.json())
                    .then((result) => loadHourForecast(result));
            }
        });
}
