export const closeLogin = () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("click", (e) => {
    if (e.target.id === "loginForm") {
      loginForm.classList.toggle("hidden");
    }
  });
};
