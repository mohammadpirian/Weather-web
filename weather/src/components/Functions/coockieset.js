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
  }
};
