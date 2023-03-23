export let weather = {
  apikey: "10f8348fea9ed5d4989ac0986cc94a56",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      // .then((data)=>console.log(data))
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    console.log(data);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerHTML = "Wheather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "wind speed: " + speed + "km/h";
  },
  search: function (event) {
    event.preventDefault();
    this.fetchWeather(document.getElementById("search-city").value);
  },
};

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=Baghdad&appid=10f8348fea9ed5d4989ac0986cc94a56
// https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=10f8348fea9ed5d4989ac0986cc94a56
// https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=10f8348fea9ed5d4989ac0986cc94a56
