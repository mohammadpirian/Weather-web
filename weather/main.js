import "./src/index.css";
import "./node_modules/flowbite/dist/flowbite.min.js";
import { App } from "./src/App";
import { darkMode } from "./src/components/Functions/darkMode";
import openSignup from "./src/components/signup/openSignup";
import openLogin from "./src/components/login/openLogin";
import { closeLogin } from "./src/components/login/closeLogin";
import { closeSignup } from "./src/components/signup/closeSignup";
import { postdatasignup } from "./src/components/Functions/signup/postdatasignup";
import { weather } from "./src/components/card/card";
// import { debounce } from "lodash/function.js";
import { search } from "./src/components/Functions/search";
import { postdatalogin } from "./src/components/Functions/login/postdatalogin";
import { coockieSet } from "./src/components/Functions/coockieset";
import loading from "./src/components/Functions/loading/loading";
import { signout } from "./src/components/Functions/signout.js/signout";

const root = document.getElementById("app");

root.appendChild(App());
darkMode();
openSignup();
openLogin();
closeLogin();
closeSignup();
postdatasignup();
postdatalogin();
coockieSet();
signout();

document.body.insertAdjacentHTML("beforeend", loading());

weather.fetchWeather("همدان");
weather.fetchWeather1("تهران");
weather.fetchWeather2("مشهد");
weather.fetchWeather3("اهواز");
weather.fetchWeather4("بروجرد");
weather.fetchWeather5("البرز");
search();

// document
//   .getElementById("searchform")
//   .addEventListener("submit", function (e) {
//     event.preventDefault();
//     console.log(mamad);
//     // weather.search();
//   });
