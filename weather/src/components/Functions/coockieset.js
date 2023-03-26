// openSignupBtn
import Cookies from "js-cookie";
export const coockieSet = () => {
  if (Cookies.get("token")) {
    const openSignupBtn = document.getElementById("openSignupBtn");
    openSignupBtn.classList.toggle("bg-red-300");
  }
};
