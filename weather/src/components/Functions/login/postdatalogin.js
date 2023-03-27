import Cookies from "js-cookie";

export let postdatalogin = () => {
  const logForm = document.getElementById("logForm");
  logForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formLI = new FormData(logForm);
    // console.log(formLI);
    let dataLgn = Object.fromEntries(formLI);
    // console.log(dataLgn);

    const userValidation = async (username, password) => {
      try {
        const response = await (
          await fetch(
            `http://localhost:3002/users?username=${username}&password=${password}`
          )
        ).json();
        const data = await response;
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    userValidation(dataLgn.username, dataLgn.password).then((data) => {
      // console.log(dataLgn.username);
      if (data.length === 1) {
        Cookies.set("token", data[0].username, { expires: 1 });
        alert("Welcome to MAMAD Weather 😎");
      }
    });
    logForm.reset();
  });
};
