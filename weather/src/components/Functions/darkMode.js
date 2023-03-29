export let darkMode = () => {
  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
  var bacgroundToggleLight = document.getElementById("bacground-img-light");
  var bacgroundToggleDark = document.getElementById("bacground-img-dark");
  var logolight = document.getElementById("logo-light");
  var logonight = document.getElementById("logo-night");
  var icon1 = document.getElementById("icon-1");
  var icon2 = document.getElementById("icon-2");
  var icon3 = document.getElementById("icon-3");
  var icon4 = document.getElementById("icon-4");
  var icon5 = document.getElementById("icon-5");
  var icon6 = document.getElementById("icon-6");
  var icon7 = document.getElementById("icon-7");

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
    bacgroundToggleLight.classList.remove("hidden");
    logolight.classList.remove("hidden");
    icon1.classList.remove("hidden");
    icon2.classList.remove("hidden");
    icon3.classList.remove("hidden");
    icon4.classList.remove("hidden");
    icon5.classList.remove("hidden");
    icon6.classList.remove("hidden");
    icon7.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
    bacgroundToggleDark.classList.remove("hidden");
    logonight.classList.remove("hidden");
  }

  var themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");
    bacgroundToggleDark.classList.toggle("hidden");
    bacgroundToggleLight.classList.toggle("hidden");
    logolight.classList.toggle("hidden");
    logonight.classList.toggle("hidden");
    icon1.classList.toggle("hidden");
    icon2.classList.toggle("hidden");
    icon3.classList.toggle("hidden");
    icon4.classList.toggle("hidden");
    icon5.classList.toggle("hidden");
    icon6.classList.toggle("hidden");
    icon7.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
};
