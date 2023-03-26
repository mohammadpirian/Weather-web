import { debounce } from "lodash/function.js";
import { weather } from "../card/card";
export const search = () => {
  document.getElementById("search-city").addEventListener(
    "keyup",
    debounce((e) => {
      document.getElementById("Spinner").classList.remove("hidden");
      weather.fetchWeather(e.target.value);
    }, 1000)
  );
};

// let searchmmd = document.getElementById("search-city");
// searchmmd.addEventListener("keyup", search);

// let search = debounce(() => {
//   const data = 10;
//   console.log(data);
// }, 1000);

// document.getElementById("search-city").addEventListener(
//   "keyup",
//   debounce(() => {
//     console.log("mamad");
//   }, 1000)
// );
