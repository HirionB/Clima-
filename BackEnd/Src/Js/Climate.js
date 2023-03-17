const apiKey = "26148eb01c8f3652464dacc9b9037574";

const cityInput = document.querySelector("#city-input");
const searchbtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperatura span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span")


const getWeatherData = async (city) =>{

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src" , `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    humidityElement.innerText = `${data.main.humidity} %`
    windElement.innerText = `${data.wind.speed} km/h `
    weatherContainer.classList.remove("hide")

}

searchbtn.addEventListener("click" , (h) =>{

    h.preventDefault();

    const city = cityInput.value;

    showWeatherData(city)

});