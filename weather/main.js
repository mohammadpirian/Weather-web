import "./src/index.css";
import "./node_modules/flowbite/dist/flowbite.min.js";
import { App } from "./src/App";
import { darkMode } from "./src/components/Functions/darkMode";
import openSignup from "./src/components/signup/openSignup";
import openLogin from "./src/components/login/openLogin";
import { closeLogin } from "./src/components/login/closeLogin";
import { closeSignup } from "./src/components/signup/closeSignup";
import { postdatasignup } from "./src/components/Functions/postdatasignup";
import { weather } from "./src/components/card/card";

const root = document.getElementById("app");
root.appendChild(App());
darkMode();
openSignup();
openLogin();
closeLogin();
closeSignup();
postdatasignup();
weather.fetchWeather("توکیو ");
document
  .getElementById("searchform")
  .addEventListener("submit", function (e) {
    event.preventDefault();
    console.log(mamad);
    // weather.search();
  });
