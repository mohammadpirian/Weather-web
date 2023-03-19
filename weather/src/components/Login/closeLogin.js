export const closeLogin = () => {
  const modalLogin = document.getElementById("loginForm");
  modalLogin.addEventListener("click", (e) => {
    if (e.target.id !== "modalLogin") {
      modalLogin.classList.toggle("hidden");
    }
  });
};
