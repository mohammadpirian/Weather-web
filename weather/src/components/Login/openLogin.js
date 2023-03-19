const openLogin = () => {
  let loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  let openLoginBtn = document.getElementById("openLoginBtn");
  openLoginBtn.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    signupForm.classList.toggle("hidden");
  });
};
export default openLogin;
