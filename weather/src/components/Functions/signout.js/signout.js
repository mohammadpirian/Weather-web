import Cookies from "js-cookie";
export const signout = () => {
  const SignoutBtn = document.getElementById("SignoutBtn");
  SignoutBtn.addEventListener("click", () => {
    Cookies.remove("token");
    alert("bye bye");
  });
};
