const apiKey = "e79ad0a02198994ab903acad9029866f";
const url = "https://api.openweathermap.org/data/2.5/weather?q=bhairahawa&units=metric";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
const weatherInfo = document.getElementById("weatherInfo");

// Trigger on button click
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) getWeather(city);
});

// Trigger on Enter key
cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchBtn.click();
});
async function getWeather(city) {

    const response = await fetch(url + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data);

}
getWeather();