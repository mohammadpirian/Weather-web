export const closeSignup = () => {
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("click", (e) => {
    if (e.target.id === "signupForm") {
      signupForm.classList.toggle("hidden");
    }
  });
};
