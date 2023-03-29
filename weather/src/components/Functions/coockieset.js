// openSignupBtn
import Cookies from "js-cookie";
export const coockieSet = () => {
  if (Cookies.get("token")) {
    const openSignupBtn = document.getElementById("openSignupBtn");

    openSignupBtn.classList.toggle("hidden");
    const SignoutBtn = document.getElementById("SignoutBtn");
    SignoutBtn.classList.remove("hidden");

    // document.getElementById("imglogin").src = "src/logo/red.png";
    // imglogin.attributes("src/logo/red.png");
  } else {
    const cube = document.getElementById("cube-box");
    cube.classList.remove("hidden");
    const middle = document.getElementById("middle-main");
    middle.classList.toggle("hidden");
    const left = document.getElementById("left-main");
    left.classList.toggle("hidden");
  }
};
