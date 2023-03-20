export let postdatasignup = () => {
  const signForm = document.getElementById("signForm");
  signForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formSU = new FormData(signForm);
    console.log(formSU);
    let data = Object.fromEntries(formSU);
    
    fetch("http://localhost:3002/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });
};
