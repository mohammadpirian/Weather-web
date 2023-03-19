const openSignup = () => {
  let signupForm = document.getElementById("signupForm");
  let openLoginBtn = document.getElementById("openSignupBtn");
  openLoginBtn.addEventListener("click", () => {
    signupForm.classList.remove("hidden");
  });
};
export default openSignup;
