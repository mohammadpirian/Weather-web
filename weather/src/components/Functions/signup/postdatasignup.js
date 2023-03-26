export let postdatasignup = () => {
  const signForm = document.getElementById("signForm");
  signForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formSU = new FormData(signForm);
    console.log(formSU);
    let datafrm = Object.fromEntries(formSU);

    const isregister = async (email) => {
      try {
        const response = await (
          await fetch(`http://localhost:3002/users?q=${email}`)
        ).json();
        const data = await response;
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    isregister(datafrm.email).then((data) => {
      if (data.length === 0) {
        fetch("http://localhost:3002/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datafrm),
        });
        signForm.reset();
      }
    });
  });
};
