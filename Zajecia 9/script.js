
const API_KEY = "54a9c9f859c1f9db0c3ace832df16eec";

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function addCity(event) {
  event.preventDefault();
  const cityInput = document.querySelector("#city-input");
  const city = cityInput.value;
  cityInput.value = "";

  getWeather(city).then(data => {
    const cityList = document.querySelector("#city-list");
    const li = document.createElement("li");
    const temperature = kelvinToCelsius(data.main.temp).toFixed(1);
    li.innerHTML = `
      <span>${city}</span>
      <button class="remove-button">X</button>
      <br>
      <span>Temperature: ${temperature} &#8451;</span>
      <br>
      <span>Humidity: ${data.main.humidity}</span>
      <br>
      <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    `;
    cityList.appendChild(li);

    const cities = JSON.parse(localStorage.getItem("cities")) || [];
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities));
  });
}

function removeCity(event) {
  if (event.target.classList.contains("remove-button")) {
    const li = event.target.parentNode;
    const city = li.querySelector("span").textContent;
    li.remove();

    const cities = JSON.parse(localStorage.getItem("cities"));
    const index = cities.indexOf(city);

cities.splice(index, 1);
localStorage.setItem("cities", JSON.stringify(cities));
}
}

const cities = JSON.parse(localStorage.getItem("cities")) || [];
cities.forEach(city => addCity({ preventDefault: () => {} }, city));

const addForm = document.querySelector("#add-form");
addForm.addEventListener("submit", addCity);

const cityList = document.querySelector("#city-list");
cityList.addEventListener("click", removeCity);
