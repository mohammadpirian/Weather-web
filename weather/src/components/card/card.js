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
    document.querySelector(".city").innerHTML = "" + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText =
      "Description: " + description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
    document.getElementById("Spinner").classList.add("hidden");
  },
  fetchWeather1: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      // .then((data)=>console.log(data))
      .then((data1) => this.displayWeather1(data1));
  },
  displayWeather1: function (data1) {
    console.log(data1);
    const { name } = data1;
    const { icon, description } = data1.weather[0];
    const { temp, humidity } = data1.main;
    const { speed } = data1.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city1").innerHTML = "📍" + name;
    document.querySelector(".icon1").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description1").innerText =
      "DES: " + description;
    document.querySelector(".temp1").innerText = temp + "°C";
    document.querySelector(".humidity1").innerText =
      "HU: " + humidity + "%";
    
  },

  fetchWeather2: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      // .then((data)=>console.log(data))
      .then((data2) => this.displayWeather2(data2));
  },
  displayWeather2: function (data2) {
    console.log(data2);
    const { name } = data2;
    const { icon, description } = data2.weather[0];
    const { temp, humidity } = data2.main;
    const { speed } = data2.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city2").innerHTML = "📍" + name;
    document.querySelector(".icon2").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description2").innerText =
      "DES: " + description;
    document.querySelector(".temp2").innerText = temp + "°C";
    document.querySelector(".humidity2").innerText =
      "HU: " + humidity + "%";
    
  },

  fetchWeather3: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      // .then((data)=>console.log(data))
      .then((data3) => this.displayWeather3(data3));
  },
  displayWeather3: function (data3) {
    console.log(data3);
    const { name } = data3;
    const { icon, description } = data3.weather[0];
    const { temp, humidity } = data3.main;
    const { speed } = data3.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city3").innerHTML = "📍" + name;
    document.querySelector(".icon3").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description3").innerText =
      "DES: " + description;
    document.querySelector(".temp3").innerText = temp + "°C";
    document.querySelector(".humidity3").innerText =
      "HU: " + humidity + "%";
    
  },

  fetchWeather4: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      // .then((data)=>console.log(data))
      .then((data4) => this.displayWeather4(data4));
  },
  displayWeather4: function (data4) {
    console.log(data4);
    const { name } = data4;
    const { icon, description } = data4.weather[0];
    const { temp, humidity } = data4.main;
    const { speed } = data4.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city4").innerHTML = "📍" + name;
    document.querySelector(".icon4").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description4").innerText =
      "DES: " + description;
    document.querySelector(".temp4").innerText = temp + "°C";
    document.querySelector(".humidity4").innerText =
      "HU: " + humidity + "%";
    
  },

  fetchWeather5: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      // .then((data)=>console.log(data))
      .then((data5) => this.displayWeather5(data5));
  },
  displayWeather5: function (data5) {
    console.log(data5);
    const { name } = data5;
    const { icon, description } = data5.weather[0];
    const { temp, humidity } = data5.main;
    const { speed } = data5.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city5").innerHTML = "📍" + name;
    document.querySelector(".icon5").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description5").innerText =
      "DES: " + description;
    document.querySelector(".temp5").innerText = temp + "°C";
    document.querySelector(".humidity5").innerText =
      "HU: " + humidity + "%";
    
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
